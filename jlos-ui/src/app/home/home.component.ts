import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  activities=[
    {
      page: "Dashboard",
      icon: "dashboard"
    },
    {
      page: "Danh sách hồ sơ vay",
      icon: "folder"
    },
    {
      page: "Công việc của tôi",
      icon: "flag"
    },
    {
      page: "Khách hàng chờ tư vấn",
      icon: "customer"
    },
    {
      page: "Tra cứu sản phẩm",
      icon: "customer"
    },
    {
      page: "Tra cứu chương trình vay",
      icon: "customer"
    },
    {
      page: "Quản trị nội dung Mobile App",
      icon: "file"
    }
  ]
}
