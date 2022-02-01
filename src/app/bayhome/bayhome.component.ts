import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { b } from '@angular/core/src/render3';
// import * as $ from ‘jquery’;
declare var jquery:any;
declare var $ :any;
 

@Component({
  selector: 'app-bayhome',
  templateUrl: './bayhome.component.html',
  styleUrls: ['./bayhome.component.css']
})
export class BayhomeComponent implements OnInit {
  _cumulativeLab : any;
  _quaterLab : any;
  clock : any;
  [x: string]: any;
  constructor(private _data1:DataService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {

    setInterval(()=>{
      this.clock = Date.now();
    },1000);

    
    this.toolData = this._data1.getTools().subscribe(data =>{
      this._toolsListed = data as [any];
      

      this.bay23 =  this._toolsListed.filter(data=>{
        return data.bay_number==31 && data.is_active == true
      });
        this.bay23.forEach(function (value) {
        if(value.status === 'IN'){
          $('#bay31').css({fill: "#ffff80"});
        }
        else if (value.status === 'ID') {
          $('#bay31').css({fill: "#ff7f7f"});
        }
        else if (value.status === 'PR') {
          $('#bay31').css({fill: "#c2de80"});
        }
        else if (value.status === 'MA') {
          $('#bay31').css({fill: "#9ac3f5"});
        }
        })
      
      this.bay4 =  this._toolsListed.filter(data=>{
        return data.bay_number==4 && data.is_active == true
      });
        this.bay4.forEach(function (value) {
        if(value.status === 'IN'){
          $('#bay4').css({fill: "#ffff80"});
        }
        else if (value.status === 'ID') {
          $('#bay4').css({fill: "#ff7f7f"});
        }
        else if (value.status === 'PR') {
          $('#bay4').css({fill: "#c2de80"});
        }
        else if (value.status === 'MA') {
          $('#bay4').css({fill: "#9ac3f5"});
        }
        })

        this.bay1_INN =  this._toolsListed.filter(data=>{
          return data.bay_number=='1_INN' && data.is_active == true
        });

          this.bay1_INN.forEach(function (value) {
          if(value.status === 'IN'){
            $('#bay1_INN').css({fill: "#ffff80"});
          }
          else if (value.status === 'ID') {
            $('#bay1_INN').css({fill: "#ff7f7f"});
          }
          else if (value.status === 'PR') {
            $('#bay1_INN').css({fill: "#c2de80"});
          }
          else if (value.status === 'MA') {
            $('#bay1_INN').css({fill: "#9ac3f5"});
          }
          })

        

          this.bay2_INN = this._toolsListed.filter(data=>{
            return data.bay_number=='2_INN' && data.is_active == true
          });
            this.bay2_INN.forEach(function (value) {
              
            if(value.status === 'IN'){
              $('#bay2_INN').css({fill: "#ffff80"});
            }
            else if (value.status === 'ID') {
              $('#bay2_INN').css({fill: "#ff7f7f"});
            }
            else if (value.status === 'PR') {
              $('#bay2_INN').css({fill: "#c2de80"});
            }
            else if (value.status === 'MA') {
              $('#bay2_INN').css({fill: "#9ac3f5"});
            }
            })

            this.bay3_INN =  this._toolsListed.filter(data=>{
              return data.bay_number=='3_INN' && data.is_active == true
            });
              this.bay3_INN.forEach(function (value) {
              if(value.status === 'IN'){
                $('#bay3_INN').css({fill: "#ffff80"});
              }
              else if (value.status === 'ID') {
                $('#bay3_INN').css({fill: "#ff7f7f"});
              }
              else if (value.status === 'PR') {
                $('#bay3_INN').css({fill: "#c2de80"});
              }
              else if (value.status === 'MA') {
                $('#bay3_INN').css({fill: "#9ac3f5"});
              }
              })

              this.bay5_INN =  this._toolsListed.filter(data=>{
                return data.bay_number=='5_INN' && data.is_active == true
              });
                this.bay5_INN.forEach(function (value) {
                if(value.status === 'IN'){
                  $('#bay5_INN').css({fill: "#ffff80"});
                }
                else if (value.status === 'ID') {
                  $('#bay5_INN').css({fill: "#ff7f7f"});
                }
                else if (value.status === 'PR') {
                  $('#bay5_INN').css({fill: "#c2de80"});
                }
                else if (value.status === 'MA') {
                  $('#bay5_INN').css({fill: "#9ac3f5"});
                }
                })

                this.bay6_INN =  this._toolsListed.filter(data=>{
                  return data.bay_number=='6_INN' && data.is_active == true
                });
                  this.bay6_INN.forEach(function (value) {
                  if(value.status === 'IN'){
                    $('#bay6_INN').css({fill: "#ffff80"});
                  }
                  else if (value.status === 'ID') {
                    $('#bay6_INN').css({fill: "#ff7f7f"});
                  }
                  else if (value.status === 'PR') {
                    $('#bay6_INN').css({fill: "#c2de80"});
                  }
                  else if (value.status === 'MA') {
                    $('#bay6_INN').css({fill: "#9ac3f5"});
                  }
                  })

                  this.bay6B =  this._toolsListed.filter(data=>{
                    return data.bay_number=='6B' && data.is_active == true
                  });
                    this.bay6B.forEach(function (value) {
                    if(value.status === 'IN'){
                      $('#bay6B').css({fill: "#ffff80"});
                    }
                    else if (value.status === 'ID') {
                      $('#bay6B').css({fill: "#ff7f7f"});
                    }
                    else if (value.status === 'PR') {
                      $('#bay6B').css({fill: "#c2de80"});
                    }
                    else if (value.status === 'MA') {
                      $('#bay6B').css({fill: "#9ac3f5"});
                    }
                    })

                    this.bay6C =  this._toolsListed.filter(data=>{
                      return data.bay_number=='6C' && data.is_active == true
                    });
                      this.bay6C.forEach(function (value) {
                      if(value.status === 'IN'){
                        $('#bay6C').css({fill: "#ffff80"});
                      }
                      else if (value.status === 'ID') {
                        $('#bay6C').css({fill: "#ff7f7f"});
                      }
                      else if (value.status === 'PR') {
                        $('#bay6C').css({fill: "#c2de80"});
                      }
                      else if (value.status === 'MA') {
                        $('#bay6C').css({fill: "#9ac3f5"});
                      }
                      })

            


            this.bay4_INN =  this._toolsListed.filter(data=>{
              return data.bay_number=='4_INN' && data.is_active == true
            });
              this.bay4_INN.forEach(function (value) {
              if(value.status === 'IN'){
                $('#bay4_INN').css({fill: "#ffff80"});
              }
              else if (value.status === 'ID') {
                $('#bay4_INN').css({fill: "#ff7f7f"});
              }
              else if (value.status === 'PR') {
                $('#bay4_INN').css({fill: "#c2de80"});
              }
              else if (value.status === 'MA') {
                $('#bay4_INN').css({fill: "#9ac3f5"});
              }
              })



            this.bay7_INN =  this._toolsListed.filter(data=>{
              return data.bay_number=='7_INN' && data.is_active == true
            });
              this.bay7_INN.forEach(function (value) {
              if(value.status === 'IN'){
                $('#bay7_INN').css({fill: "#ffff80"});
              }
              else if (value.status === 'ID') {
                $('#bay7_INN').css({fill: "#ff7f7f"});
              }
              else if (value.status === 'PR') {
                $('#bay7_INN').css({fill: "#c2de80"});
              }
              else if (value.status === 'MA') {
                $('#bay7_INN').css({fill: "#9ac3f5"});
              }
              })

              this.bay8_INN =  this._toolsListed.filter(data=>{
                return data.bay_number=='8_INN' && data.is_active == true
              });
                this.bay8_INN.forEach(function (value) {
                if(value.status === 'IN'){
                  $('#bay8_INN').css({fill: "#ffff80"});
                }
                else if (value.status === 'ID') {
                  $('#bay8_INN').css({fill: "#ff7f7f"});
                }
                else if (value.status === 'PR') {
                  $('#bay8_INN').css({fill: "#c2de80"});
                }
                else if (value.status === 'MA') {
                  $('#bay8_INN').css({fill: "#9ac3f5"});
                }
                })

                this.bay8B =  this._toolsListed.filter(data=>{
                  return data.bay_number=='8B' && data.is_active == true
                });
                  this.bay8B.forEach(function (value) {
                  if(value.status === 'IN'){
                    $('#bay8B').css({fill: "#ffff80"});
                  }
                  else if (value.status === 'ID') {
                    $('#bay8B').css({fill: "#ff7f7f"});
                  }
                  else if (value.status === 'PR') {
                    $('#bay8B').css({fill: "#c2de80"});
                  }
                  else if (value.status === 'MA') {
                    $('#bay8B').css({fill: "#9ac3f5"});
                  }
                  })

              this.bay9_INN =  this._toolsListed.filter(data=>{
                return data.bay_number=='9_INN' && data.is_active == true
              });
                this.bay9_INN.forEach(function (value) {
                if(value.status === 'IN'){
                  $('#bay9_INN').css({fill: "#ffff80"});
                }
                else if (value.status === 'ID') {
                  $('#bay9_INN').css({fill: "#ff7f7f"});
                }
                else if (value.status === 'PR') {
                  $('#bay9_INN').css({fill: "#c2de80"});
                }
                else if (value.status === 'MA') {
                  $('#bay9_INN').css({fill: "#9ac3f5"});
                }
                })

              this.bay10_INN =  this._toolsListed.filter(data=>{
                return data.bay_number=='10_INN' && data.is_active == true
              });
                this.bay10_INN.forEach(function (value) {
                if(value.status === 'IN'){
                  $('#bay10_INN').css({fill: "#ffff80"});
                }
                else if (value.status === 'ID') {
                  $('#bay10_INN').css({fill: "#ff7f7f"});
                }
                else if (value.status === 'PR') {
                  $('#bay10_INN').css({fill: "#c2de80"});
                }
                else if (value.status === 'MA') {
                  $('#bay10_INN').css({fill: "#9ac3f5"});
                }
                })


               
                this.bay11_INN =  this._toolsListed.filter(data=>{
                  return data.bay_number=='11_INN' && data.is_active == true
                });
                  this.bay11_INN.forEach(function (value) {
                  if(value.status === 'IN'){
                    $('#bay11_INN').css({fill: "#ffff80"});
                  }
                  else if (value.status === 'ID') {
                    $('#bay11_INN').css({fill: "#ff7f7f"});
                  }
                  else if (value.status === 'PR') {
                    $('#bay11_INN').css({fill: "#c2de80"});
                  }
                  else if (value.status === 'MA') {
                    $('#bay11_INN').css({fill: "#9ac3f5"});
                  }
                  })


                  this.bay12_INN =  this._toolsListed.filter(data=>{
                    return data.bay_number=='12_INN' && data.is_active == true
                  });
                    this.bay12_INN.forEach(function (value) {
                    if(value.status === 'IN'){
                      $('#bay12_INN').css({fill: "#ffff80"});
                    }
                    else if (value.status === 'ID') {
                      $('#bay12_INN').css({fill: "#ff7f7f"});
                    }
                    else if (value.status === 'PR') {
                      $('#bay12_INN').css({fill: "#c2de80"});
                    }
                    else if (value.status === 'MA') {
                      $('#bay12_INN').css({fill: "#9ac3f5"});
                    }
                    })



            // this.bay12 =  this._toolsListed.filter(data=>{
            //   return data.bay_number==12 && data.is_active == true
            // });
            //   this.bay12.forEach(function (value) {
            //   if(value.status === 'IN'){
            //     $('#bay12').css({fill: "#ffff80"});
            //   }
            //   else if (value.status === 'ID') {
            //     $('#bay12').css({fill: "#ff7f7f"});
            //   }
            //   else if (value.status === 'PR') {
            //     $('#bay12').css({fill: "#c2de80"});
            //   }
            //   else if (value.status === 'MA') {
            //     $('#bay12').css({fill: "#9ac3f5"});
            //   }
            //   })


              this.bay12A =  this._toolsListed.filter(data=>{
                return data.bay_number=='12A' && data.is_active == true
              });
                this.bay12A.forEach(function (value) {
                if(value.status === 'IN'){
                  $('#bay12A').css({fill: "#ffff80"});
                }
                else if (value.status === 'ID') {
                  $('#bay12A').css({fill: "#ff7f7f"});
                }
                else if (value.status === 'PR') {
                  $('#bay12A').css({fill: "#c2de80"});
                }
                else if (value.status === 'MA') {
                  $('#bay12A').css({fill: "#9ac3f5"});
                }
                })
  
                this.bay12B =  this._toolsListed.filter(data=>{
                  return data.bay_number=='12B' && data.is_active == true
                });
                  this.bay12B.forEach(function (value) {
                  if(value.status === 'IN'){
                    $('#bay12B').css({fill: "#ffff80"});
                  }
                  else if (value.status === 'ID') {
                    $('#bay12B').css({fill: "#ff7f7f"});
                  }
                  else if (value.status === 'PR') {
                    $('#bay12B').css({fill: "#c2de80"});
                  }
                  else if (value.status === 'MA') {
                    $('#bay12B').css({fill: "#9ac3f5"});
                  }
                  })
            
            this.bay13_INN =  this._toolsListed.filter(data=>{
              return data.bay_number=='13_INN' && data.is_active == true
            });
              this.bay13_INN.forEach(function (value) {
              if(value.status === 'IN'){
                $('#bay13_INN').css({fill: "#ffff80"});
              }
              else if (value.status === 'ID') {
                $('#bay13_INN').css({fill: "#ff7f7f"});
              }
              else if (value.status === 'PR') {
                $('#bay13_INN').css({fill: "#c2de80"});
              }
              else if (value.status === 'MA') {
                $('#bay13_INN').css({fill: "#9ac3f5"});
              }
              })  

              this.bay14_INN =  this._toolsListed.filter(data=>{
              return data.bay_number=='14_INN' && data.is_active == true
              });
              this.bay14_INN.forEach(function (value) {
              if(value.status === 'IN'){
                $('#bay14_INN').css({fill: "#ffff80"});
              }
              else if (value.status === 'ID') {
                $('#bay14_INN').css({fill: "#ff7f7f"});
              }
              else if (value.status === 'PR') {
                $('#bay14_INN').css({fill: "#c2de80"});
              }
              else if (value.status === 'MA') {
                $('#bay14_INN').css({fill: "#9ac3f5"});
              }
              })

              this.bay15_INN =  this._toolsListed.filter(data=>{
                return data.bay_number=='15_INN' && data.is_active == true
              });
                this.bay15_INN.forEach(function (value) {
                if(value.status === 'IN'){
                  $('#bay15_INN').css({fill: "#ffff80"});
                }
                else if (value.status === 'ID') {
                  $('#bay15_INN').css({fill: "#ff7f7f"});
                }
                else if (value.status === 'PR') {
                  $('#bay15_INN').css({fill: "#c2de80"});
                }
                else if (value.status === 'MA') {
                  $('#bay15_INN').css({fill: "#9ac3f5"});
                }
                })

                this.bay16_INN =  this._toolsListed.filter(data=>{
                  return data.bay_number=='16_INN' && data.is_active == true
                });
                  this.bay16_INN.forEach(function (value) {
                  if(value.status === 'IN'){
                    $('#bay16_INN').css({fill: "#ffff80"});
                  }
                  else if (value.status === 'ID') {
                    $('#bay16_INN').css({fill: "#ff7f7f"});
                  }
                  else if (value.status === 'PR') {
                    $('#bay16_INN').css({fill: "#c2de80"});
                  }
                  else if (value.status === 'MA') {
                    $('#bay16_INN').css({fill: "#9ac3f5"});
                  }
                  })

                  this.bay17_INN =  this._toolsListed.filter(data=>{
                    return data.bay_number=='17_INN' && data.is_active == true
                  });
                    this.bay17_INN.forEach(function (value) {
                    if(value.status === 'IN'){
                      $('#bay17_INN').css({fill: "#ffff80"});
                    }
                    else if (value.status === 'ID') {
                      $('#bay17_INN').css({fill: "#ff7f7f"});
                    }
                    else if (value.status === 'PR') {
                      $('#bay17_INN').css({fill: "#c2de80"});
                    }
                    else if (value.status === 'MA') {
                      $('#bay17_INN').css({fill: "#9ac3f5"});
                    }
                    })

                    this.bay18_INN =  this._toolsListed.filter(data=>{
                      return data.bay_number=='18_INN' && data.is_active == true
                    });
                      this.bay18_INN.forEach(function (value) {
                      if(value.status === 'IN'){
                        $('#bay18_INN').css({fill: "#ffff80"});
                      }
                      else if (value.status === 'ID') {
                        $('#bay18_INN').css({fill: "#ff7f7f"});
                      }
                      else if (value.status === 'PR') {
                        $('#bay18_INN').css({fill: "#c2de80"});
                      }
                      else if (value.status === 'MA') {
                        $('#bay18_INN').css({fill: "#9ac3f5"});
                      }
                      })

              // this.bay19 =  this._toolsListed.filter(data=>{
              //   return data.bay_number==19 && data.is_active == true
              // });
              //   this.bay19.forEach(function (value) {
              //   if(value.status === 'IN'){
              //     $('#bay19').css({fill: "#ffff80"});
              //   }
              //   else if (value.status === 'ID') {
              //     $('#bay19').css({fill: "#ff7f7f"});
              //   }
              //   else if (value.status === 'PR') {
              //     $('#bay19').css({fill: "#c2de80"});
              //   }
              //   else if (value.status === 'MA') {
              //     $('#bay19').css({fill: "#9ac3f5"});
              //   }
              //   })

                    // this.bay24B =  this._toolsListed.filter(data=>{
                    //   return data.bay_number=='24B' && data.is_active == true
                    // });
                    //   this.bay24B.forEach(function (value) {
                    //   if(value.status === 'IN'){
                    //     $('#bay24B').css({fill: "#ffff80"});
                    //   }
                    //   else if (value.status === 'ID') {
                    //     $('#bay24B').css({fill: "#ff7f7f"});
                    //   }
                    //   else if (value.status === 'PR') {
                    //     $('#bay24B').css({fill: "#c2de80"});
                    //   }
                    //   else if (value.status === 'MA') {
                    //     $('#bay24B').css({fill: "#9ac3f5"});
                    //   }
                    //   })


                   


                            })


      this._cumulativeLab = '';
      this._data1.dashboardCumulative().subscribe(data =>{
        this._cumulativeLab = data;
      })    

     
      this._quaterLab = '';
      this._data1.dashboardQuaterly().subscribe(data=>{
        this._quaterLab = data;
      })


  }


  ngOnDestroy(){
    this.toolData.unsubscribe();
    // this._cumulativeUtilization.unsubscribe();
    // this._quaterUtilization.unsubscribe();
  }

  setId(id){
    this.router.navigate(['dashboard/toolinfo'+'/'+id]);
  }

}