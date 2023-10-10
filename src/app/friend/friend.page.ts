import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.page.html',
  styleUrls: ['./friend.page.scss'],
})
export class FriendPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  friendList = [
    { nama: 'Pendi', status: 'Add friend', img: "assets/img/profil4.jpeg"},
    { nama: 'Dayat Gaming', status: 'Unfriend', img: "assets/img/profil1.jpg"},
    { nama: 'Latif', status: 'Accept', img: "assets/img/profil2.jpg"},
    { nama: 'Lukman', status: 'Accept', img: "assets/img/profil4.jpeg"},
    { nama: 'Difa', status: 'Accept', img: "assets/img/profil1.jpg"},
    { nama: 'Difa', status: 'Accept', img: "assets/img/profil2.jpg"},
  ];
}
