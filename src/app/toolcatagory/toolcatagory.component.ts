import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-toolcatagory',
  templateUrl: './toolcatagory.component.html',
  styleUrls: ['./toolcatagory.component.css']
})
export class ToolcatagoryComponent implements OnInit {
  
  [x: string]:any;

  
//   idToken = localStorage.getItem('csrftoken');
apiRoot: string = "http://152.135.122.61:8871";
//  apiRoot: string = "http://152.135.122.61:8871";
//options = { headers: new HttpHeaders({'Authorization': 'JWT '+ this.cookie.get('csrftoken')}) };
  
  constructor(private _data1:DataService,private http:HttpClient,) { }
//   options = { headers: new HttpHeaders({'Authorization': 'JWT '+ this.idToken})};

  ngOnInit() {

    setInterval(()=>{
        this.clock = Date.now();
      },1000);


      this.http.get(this.apiRoot+'/api/tool_category_data/150/').subscribe(data =>{
        this._labListed1_INN = data as [any];
        if (this._labListed1_INN.Tool_efficiency === false) {
          $('#lab1_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed1_INN.Tool_efficiency === true) {
          $('#lab1_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
        $("#lab1_INN").hover(()=>{
          if (this._labListed1_INN.Tool_Category === "Qualifications") {
              $('#lab1_INN').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed1_INN.Tool_Category === "Field Issues") {
              $('#lab1_INN').css("fill", "rgb(255, 193, 203)");
          }
          else if (this._labListed1_INN.Tool_Category === "Process") {
              $('#lab1_INN').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed1_INN.Tool_efficiency === false) {
              $('#lab1_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed1_INN.Tool_efficiency === true) {
              $('#lab1_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
      })

    this.labData2_INN = this.http.get(this.apiRoot+'/api/tool_category_data/99/').subscribe(data =>{
      console.log(data);
      this._labListed2_INN = data as [any];
      if (this._labListed2_INN.Tool_efficiency === false) {
        $('#lab2_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed2_INN.Tool_efficiency === true) {
        $('#lab2_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab2_INN").hover(()=>{
        if (this._labListed2_INN.Tool_Category === "Qualifications") {
            $('#lab2_INN').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed2_INN.Tool_Category === "Field Issues") {
            $('#lab2_INN').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed2_INN.Tool_Category === "Process") {
            $('#lab2_INN').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed2_INN.Tool_efficiency === false) {
            $('#lab2_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed2_INN.Tool_efficiency === true) {
            $('#lab2_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });
    })

    

    this.http.get(this.apiRoot+'/api/tool_category_data/145/').subscribe(data =>{
      this._labListed3_INN = data as [any];
      if (this._labListed3_INN.Tool_efficiency === false) {
        $('#lab3_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed3_INN.Tool_efficiency === true) {
        $('#lab3_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
      }
      $("#lab3_INN").hover(()=>{
        if (this._labListed3_INN.Tool_Category === "Qualifications") {
            $('#lab3_INN').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed3_INN.Tool_Category === "Field Issues") {
            $('#lab3_INN').css("fill", "rgb(255, 193, 203)");
        }
        else if (this._labListed3_INN.Tool_Category === "Process") {
            $('#lab3_INN').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed3_INN.Tool_efficiency === false) {
            $('#lab3_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed3_INN.Tool_efficiency === true) {
            $('#lab3_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });
    })


    this.http.get(this.apiRoot+'/api/tool_category_data/152/').subscribe(data =>{
      this._labListed4_INN = data as [any];
      if (this._labListed4_INN.Tool_efficiency === false) {
        $('#lab4_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed4_INN.Tool_efficiency === true) {
        $('#lab4_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab4_INN").hover(()=>{
        if (this._labListed4_INN.Tool_Category === "Qualifications") {
            $('#lab4_INN').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed4_INN.Tool_Category === "Field Issues") {
            $('#lab4_INN').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed4_INN.Tool_Category === "Process") {
            $('#lab4_INN').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed4_INN.Tool_efficiency === false) {
            $('#lab4_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed4_INN.Tool_efficiency === true) {
            $('#lab4_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })

    this.http.get(this.apiRoot+'/api/tool_category_data/147/').subscribe(data =>{
        console.log(data);
        this._labListed5_INN = data as [any];
        if (this._labListed5_INN.Tool_efficiency === false) {
          $('#lab5_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed5_INN.Tool_efficiency === true) {
          $('#lab5_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
  
        $("#lab5_INN").hover(()=>{
          if (this._labListed5_INN.Tool_Category === "Qualifications") {
              $('#lab5_INN').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed5_INN.Tool_Category === "Field Issues") {
              $('#lab5_INN').css("fill", "rgb(255, 193, 203)");
  
          }
          else if (this._labListed5_INN.Tool_Category === "Process") {
              $('#lab5_INN').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed5_INN.Tool_efficiency === false) {
              $('#lab5_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed5_INN.Tool_efficiency === true) {
              $('#lab5_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
  
      })
  
    
  this.http.get(this.apiRoot+'/api/tool_category_data/156/').subscribe(data =>{
      console.log(data);
      this._labListed6_INN = data as [any];
      if (this._labListed6_INN.Tool_efficiency === false) {
        $('#lab6_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed6_INN.Tool_efficiency === true) {
        $('#lab6_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab6_INN").hover(()=>{
        if (this._labListed6_INN.Tool_Category === "Qualifications") {
            $('#lab6_INN').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed6_INN.Tool_Category === "Field Issues") {
            $('#lab6_INN').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed6_INN.Tool_Category === "Process") {
            $('#lab6_INN').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed6_INN.Tool_efficiency === false) {
            $('#lab6_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed6_INN.Tool_efficiency === true) {
            $('#lab6_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })

    this.http.get(this.apiRoot+'/api/tool_category_data/149/').subscribe(data =>{
      this._labListed7_INN = data as [any];
      if (this._labListed7_INN.Tool_efficiency === false) {
        $('#lab7_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed7_INN.Tool_efficiency === true) {
        $('#lab7_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab7_INN").hover(()=>{
        if (this._labListed7_INN.Tool_Category === "Qualifications") {
            $('#lab7_INN').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed7_INN.Tool_Category === "Field Issues") {
            $('#lab7_INN').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed7_INN.Tool_Category === "Process") {
            $('#lab7_INN').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed7_INN.Tool_efficiency === false) {
            $('#lab7_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed7_INN.Tool_efficiency === true) {
            $('#lab7_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })

    this.http.get(this.apiRoot+'/api/tool_category_data/151/').subscribe(data =>{
        this._labListed8_INN = data as [any];
        if (this._labListed8_INN.Tool_efficiency === false) {
          $('#lab8_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed8_INN.Tool_efficiency === true) {
          $('#lab8_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
        $("#lab8_INN").hover(()=>{
          if (this._labListed8_INN.Tool_Category === "Qualifications") {
              $('#lab8_INN').css("fill", "rgb(125, 109, 196)");
          }
          else if (this._labListed8_INN.Tool_Category === "Field Issues") {
              $('#lab8_INN').css("fill", "rgb(255, 193, 203)");
          }
          else if (this._labListed8_INN.Tool_Category === "Process") {
              $('#lab8_INN').css({fill: "#aee9ca"});
          }
      },
       ()=> {
          if (this._labListed8_INN.Tool_efficiency === false) {
              $('#lab8_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
          }
          else if (this._labListed8b.Tool_efficiency === true) {
              $('#lab8_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
          }
      });
      })
  


    this.http.get(this.apiRoot+'/api/tool_category_data/155/').subscribe(data =>{
      this._labListed9_INN = data as [any];
      if (this._labListed9_INN.Tool_efficiency === false) {
        $('#lab9_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed9_INN.Tool_efficiency === true) {
        $('#lab9_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab9_INN").hover(()=>{
        if (this._labListed9_INN.Tool_Category === "Qualifications") {
            $('#lab9_INN').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed9_INN.Tool_Category === "Field Issues") {
            $('#lab9_INN').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed9_INN.Tool_Category === "Process") {
            $('#lab9_INN').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed9.Tool_efficiency === false) {
            $('#lab9_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed9_INN.Tool_efficiency === true) {
            $('#lab9_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/154/').subscribe(data =>{
      this._labListed10_INN = data as [any];
      if (this._labListed10_INN.Tool_efficiency === false) {
        $('#lab10_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed10_INN.Tool_efficiency === true) {
        $('#lab10_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab10_INN").hover(()=>{
        if (this._labListed10_INN.Tool_Category === "Qualifications") {
            $('#lab10_INN').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed10_INN.Tool_Category === "Field Issues") {
            $('#lab10_INN').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed10_INN.Tool_Category === "Process") {
            $('#lab10_INN').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed10_INN.Tool_efficiency === false) {
            $('#lab10_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed10_INN.Tool_efficiency === true) {
            $('#lab10_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/50/').subscribe(data =>{
      this._labListed11_INN = data as [any];
      if (this._labListed11_INN.Tool_efficiency === false) {
        $('#lab11_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed11_INN.Tool_efficiency === true) {
        $('#lab11_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab11_INN").hover(()=>{
        if (this._labListed11_INN.Tool_Category === "Qualifications") {
            $('#lab11_INN').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed11_INN.Tool_Category === "Field Issues") {
            $('#lab11_INN').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed11_INN.Tool_Category === "Process") {
            $('#lab11_INN').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed11_INN.Tool_efficiency === false) {
            $('#lab11_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed11_INN.Tool_efficiency === true) {
            $('#lab11_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/127/').subscribe(data =>{
      this._labListed12_INN= data as [any];
      if (this._labListed12_INN.Tool_efficiency === false) {
        $('#lab12_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed12_INN.Tool_efficiency === true) {
        $('#lab12_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab12_INN").hover(()=>{
        if (this._labListed12_INN.Tool_Category === "Qualifications") {
            $('#lab12_INN').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed12_INN.Tool_Category === "Field Issues") {
            $('#lab12_INN').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed12_INN.Tool_Category === "Process") {
            $('#lab12_INN').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed12_INN.Tool_efficiency === false) {
            $('#lab12_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed12_INN.Tool_efficiency === true) {
            $('#lab12_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })

    
    this.http.get(this.apiRoot+'/api/tool_category_data/121/').subscribe(data =>{
      this._labListed13_INN = data as [any];
      if (this._labListed13_INN.Tool_efficiency === false) {
        $('#lab13_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed13_INN.Tool_efficiency === true) {
        $('#lab13_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab13_INN").hover(()=>{
        if (this._labListed13_INN.Tool_Category === "Qualifications") {
            $('#lab13_INN').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed13_INN.Tool_Category === "Field Issues") {
            $('#lab13_INN').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed13_INN.Tool_Category === "Process") {
            $('#lab13_INN').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed13_INN.Tool_efficiency === false) {
            $('#lab13_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed13_INN.Tool_efficiency === true) {
            $('#lab13_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/153/').subscribe(data =>{
      this._labListed14_INN = data as [any];
      if (this._labListed14_INN.Tool_efficiency === false) {
        $('#lab14_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed14_INN.Tool_efficiency === true) {
        $('#lab14_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab14_INN").hover(()=>{
        if (this._labListed14_INN.Tool_Category === "Qualifications") {
            $('#lab14_INN').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed14_INN.Tool_Category === "Field Issues") {
            $('#lab14_INN').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed14_INN.Tool_Category === "Process") {
            $('#lab14_INN').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed14_INN.Tool_efficiency === false) {
            $('#lab14_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed14_INN.Tool_efficiency === true) {
            $('#lab14_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })

    this.http.get(this.apiRoot+'/api/tool_category_data/139/').subscribe(data =>{
      this._labListed15_INN = data as [any];
      if (this._labListed15_INN.Tool_efficiency === false) {
        $('#lab15_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed15_INN.Tool_efficiency === true) {
        $('#lab15_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab15_INN").hover(()=>{
        if (this._labListed15_INN.Tool_Category === "Qualifications") {
            $('#lab15_INN').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed15_INN.Tool_Category === "Field Issues") {
            $('#lab15_INN').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed15_INN.Tool_Category === "Process") {
            $('#lab15_INN').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed15_INN.Tool_efficiency === false) {
            $('#lab15_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed15_INN.Tool_efficiency === true) {
            $('#lab15_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/135/').subscribe(data =>{
      this._labListed16_INN = data as [any];
      if (this._labListed16_INN.Tool_efficiency === false) {
        $('#lab16_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed16_INN.Tool_efficiency === true) {
        $('#lab16_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab16_INN").hover(()=>{
        if (this._labListed16_INN.Tool_Category === "Qualifications") {
            $('#lab16_INN').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed16_INN.Tool_Category === "Field Issues") {
            $('#lab16_INN').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed16_INN.Tool_Category === "Process") {
            $('#lab16_INN').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed16_INN.Tool_efficiency === false) {
            $('#lab16_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed16_INN.Tool_efficiency === true) {
            $('#lab16_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/132/').subscribe(data =>{
      this._labListed17_INN = data as [any];
      if (this._labListed17_INN.Tool_efficiency === false) {
        $('#lab17_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed17_INN.Tool_efficiency === true) {
        $('#lab17_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab17_INN").hover(()=>{
        if (this._labListed17_INN.Tool_Category === "Qualifications") {
            $('#lab17_INN').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed17_INN.Tool_Category === "Field Issues") {
            $('#lab17_INN').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed17_INN.Tool_Category === "Process") {
            $('#lab17_INN').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed17_INN.Tool_efficiency === false) {
            $('#lab17_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed17_INN.Tool_efficiency === true) {
            $('#lab17_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this.http.get(this.apiRoot+'/api/tool_category_data/123/').subscribe(data =>{
      this._labListed18_INN = data as [any];
      if (this._labListed18_INN.Tool_efficiency === false) {
        $('#lab18_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
      }
      else if (this._labListed18_INN.Tool_efficiency === true) {
        $('#lab18_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
      }

      $("#lab18_INN").hover(()=>{
        if (this._labListed18_INN.Tool_Category === "Qualifications") {
            $('#lab18_INN').css("fill", "rgb(125, 109, 196)");
        }
        else if (this._labListed18_INN.Tool_Category === "Field Issues") {
            $('#lab18_INN').css("fill", "rgb(255, 193, 203)");

        }
        else if (this._labListed18_INN.Tool_Category === "Process") {
            $('#lab18_INN').css({fill: "#aee9ca"});
        }
    },
     ()=> {
        if (this._labListed18_INN.Tool_efficiency === false) {
            $('#lab18_INN').css({fill: "rgba(239, 9, 9, 0.78)"});
        }
        else if (this._labListed18_INN.Tool_efficiency === true) {
            $('#lab18_INN').css({fill: "rgba(140, 192, 19, 0.88)"});
        }
    });

    })


    this._cumulativeLab = '';
    this._data1.dashboardCumulative().subscribe(data=>{
        this._cumulativeLab = data;
    })

    this._quaterLab = '';
    this._data1.dashboardQuaterly().subscribe(data=>{
        this._quaterLab = data;
    })      
  }

  ngOnDestroy(){
      
  }

}