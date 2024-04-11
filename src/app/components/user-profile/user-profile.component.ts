import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { DatabaseService } from '../../services/database/database.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent implements OnInit {
  user?: any;

  constructor(
    private databaseService: DatabaseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const userId = params['id'];
      if (userId) {
        this.databaseService.getUserById(userId).subscribe((user: User) => {
          console.log('user returned : ', user)
          this.user = user;
        });
      }
    });
  }
}
