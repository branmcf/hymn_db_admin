import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ContentfulService } from './../../services/contentful.service';
import { SubmitService } from './../../services/submit.service';
import * as country_list from 'country-list';
import * as countries from 'node-countries';


@Component({
  selector: 'hymn-entry-event',
  templateUrl: './entryEvent.html',
})

export class EntryEventComponent implements OnInit {
  content: JSON;
  submission: any;
  eventOccurance: any;
  all_countries: [any];
  countries: any;

  constructor (private route: ActivatedRoute,
    private router: Router,
    private contentful: ContentfulService,
    private submitService: SubmitService) {
      this.all_countries = country_list().getNames();
      this.countries = countries;
  }

  ngOnInit() {
    this.contentful.getEventForm().then((content) => {
      this.content = JSON.parse(content);
      window.scrollTo(0, 0);
    });
    this.route.params.forEach(x => this.load(+x['user.id']));

    this.submission = {
      type: 'Event',
      data: {
        title: '',
        occurance: '',
        url: '',
        parent: '',
        topic: '',
        description: '',
        event_start_date: '',
        event_end_date: '',
        cost: '',
        city: '',
        state: '',
        country: 'United States',
        hymn_soc_member: ''
      }
    };

  }

  private load(id) {
    if (!id) {
      return;
    }

    var onload = (data) => {
      if (data) {
        this.submission = data;
      } else {

      }
    };
  }


	submit() {
    var userInfo = sessionStorage.getItem('userInfo');
    var obj = (JSON.parse(userInfo));

    this.submission.user = obj.first_name + ' ' + obj.last_name;
    this.submission.uid = obj.user_id;

    if(this.eventOccurance) {
      this.submission.data.occurance = this.eventOccurance;
    }
    console.log(this.submission);

    this.submitService.submitEvent(this.submission);

	}
}
