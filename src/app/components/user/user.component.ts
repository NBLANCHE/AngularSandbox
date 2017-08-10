import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello: any;
  posts: Post[];
  isEdit = false;

  constructor(private dataService: DataService) {
    // need to inject the service as a dependency
    // now we can use any function in DataService
    // "DataService" is what we brought in from the services package
    console.log('constructor ran...');
  }

  ngOnInit() {
    // life cycle hook - will run when initialized
    console.log('ngOnInit ran');
    this.name = 'john doe';
    this.age = 30;
    this.email = 'john.doe@abc.com';
    this.address = {
      street: '40 main st',
      city: 'boston',
      state: 'MA'
    };
    this.hobbies = ['write code', 'sports'];
    // getposts returns an observable, so we need to subscribe to it
    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
      // Assign the posts to the model property
      // And now we can use it in the user template 
      this.posts = posts;


    });
  }

  onClick() {
    this.name = 'James Smith';
    this.hobbies.push('new Hobby');
  }

  addHobby(hobby) {
    console.log(hobby);
    // push to the beginning
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    console.log(hobby);
       for (let i = 0; i < this.hobbies.length; i++) {
         if (this.hobbies[i] === hobby) {
           this.hobbies.splice(i, 1);
         }
       }

  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}

  interface Address {
    street: string;
    city: string;
    state: string;
  }

  interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }
