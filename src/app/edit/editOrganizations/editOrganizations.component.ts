import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { SubmitService } from './../../services/submit.service';
import { ReviewService } from './../../services/review.service';

@Component({
  selector: 'hymn-edit-organization',
  templateUrl: './editOrganizations.html',
})

export class EditOrganizationsComponent implements OnInit {
  id: number;
  organization: any;
  catArr: any[];
  approved: boolean;
  eleted: boolean;

  constructor (private route: ActivatedRoute,
    private router: Router,
    private reviewService: ReviewService) {
  }

  ngOnInit() {
    this.route.params.forEach(x => this.load(+x['id']));
  }

    private load(id){
        if(!id) {
            return;
        }

        var onload = (data) => {
            if (data) {
                this.id = id;
                this.organization = data;
            }
        };
        this.reviewService.getOrganizationByID(id).then(onload);
    }

    approve(id) {
        this.reviewService.approveOrganization(this.id);
        this.router.navigate(['/review/organizations']);
    }

    delete(id) {
        this.reviewService.deleteOrganization(this.id);
        this.router.navigate(['/review/organizations']);
    }
}