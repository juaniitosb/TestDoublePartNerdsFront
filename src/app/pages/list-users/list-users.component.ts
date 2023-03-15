import { Component, OnInit } from '@angular/core';
import {GithubService} from "../../services/github/github.service";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  public dataTable: any[] = []
  public dataFollowes: any[] = []
  public selected: any;
  public displayLoading: boolean = false;

  constructor(private githubServices: GithubService) {
  }

  ngOnInit(): void {
  }

  search() {
    this.displayLoading=true
    this.dataTable=[]
    this.githubServices.getListUser().subscribe((res: any) => {
      if (!!res) {
        this.displayLoading=false
        this.dataTable = res
      }else {
        this.displayLoading=false
      }


    }, (error) => {

    })

  }

  followerInfo(index: any) {

    this.githubServices.getInfollowers(this.dataTable[index].login).subscribe((res: any) => {
      if (!!res) {
        this.dataFollowes = res
       // console.log(this.dataFollowes)
      }

    }, (error) => {

    })
  }

  infoUser(index:any) {

      //var collapse= document.getElementById("selectRegister").style
    this.githubServices.getInfoUser(this.dataTable[index].login).subscribe((res: any) => {
      if (!!res) {
        this.dataTable[index].infoUser = res

      }

    }, (error) => {

    })
  }
}

