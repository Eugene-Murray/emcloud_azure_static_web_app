import { Component } from '@angular/core';

@Component({
  selector: 'app-header-bar-brand',
  template: `
    <header class="banner-area">
      <!--banner nav-->
      <div class="nav-header">
        <!-- header-top -->
        <div class="header-top">
          <div class="container">
            <div class="top-flex">
              <div class="top-area-left">
                <div class="left-header-top">
                  <div class="email">
                    <span class="header-top-icon"
                      ><i class="fa fa-envelope-o"></i
                    ></span>
                    <p>support@hostcox.com</p>
                  </div>
                </div>
                <div class="middle-header-top">
                  <div class="phone">
                    <span class="header-top-icon"
                      ><i class="fa fa-phone"></i
                    ></span>
                    <p>+44 7700 900077</p>
                  </div>
                </div>
              </div>
              <div class="top-area-right text-right">
                <div class="right-header-top">
                  <ul>
                    <li>
                      <a href="#"
                        ><i class="fa fa-commenting-o header-top-icon"></i>live
                        chat</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><i class="fa fa-user header-top-icon"></i>login</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><i class="fa fa-headphones header-top-icon"></i
                        >support</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- nav-menu -->
        <div class="eco_nav">
          <div class="container">
            <nav class="navbar navbar-expand-md navbar-light bg-faded">
              <a class="navbar-brand navbar-logo" href="index.html"
                ><img src="assets/images/logo.png" alt=""
              /></a>
              <div
                class="collapse navbar-collapse main-menu"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav nav ml-auto">
                  <li class="nav-item p-nav">
                    <a href="index.html" class="nav-link active nav-menu"
                      >Home</a>
                      </li>
                      <li class="nav-item p-nav">
                    <a href="index.html" class="nav-link active nav-menu"
                      >About</a>
                      </li>
                      <li class="nav-item p-nav">
                    <a href="index.html" class="nav-link active nav-menu"
                      >Services</a>
                      </li>
                      <li class="nav-item p-nav">
                    <a href="index.html" class="nav-link active nav-menu"
                      >Services</a>
                      </li>
                      <li class="nav-item p-nav">
                    <a href="index.html" class="nav-link active nav-menu"
                      >Pricing</a>
                      </li>
                      <li class="nav-item p-nav">
                    <a href="index.html" class="nav-link active nav-menu"
                      >Technology</a>
                      </li>
                      <li class="nav-item p-nav">
                    <a href="index.html" class="nav-link active nav-menu"
                      >Portfolio</a>
                      </li>
                      <li class="nav-item p-nav">
                    <a href="index.html" class="nav-link active nav-menu"
                      >Blog</a>
                      </li>
                      <li class="nav-item p-nav">
                    <a href="index.html" class="nav-link active nav-menu"
                      >Cool Websites</a>
                      </li>
                      <li class="nav-item p-nav">
                    <a href="index.html" class="nav-link active nav-menu"
                      >Contact</a>
                      </li>
                    </ul>

                    








              </div>
              <div class="demo">
                <div
                  class="mr-auto sign-in-option btn-demo"
                  data-toggle="modal"
                  data-target="#myModal2"
                >
                  <ul class="navbar-nav">
                    <li>
                      <a href="#"
                        ><img src="images/img-part/menu.png" alt=""
                      /></a>
                    </li>
                  </ul>
                </div>
                <!-- Modal -->
                <div
                  class="modal right fade"
                  id="myModal2"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="myModalLabel2"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true"
                            ><i class="flaticon-cancel-music"></i
                          ></span>
                        </button>
                        <h2 class="modal-title" id="myModalLabel2">
                          <a href="#"><img src="images/logo_g.png" alt="" /></a
                          ><span class="disabled">logo</span>
                        </h2>
                      </div>
                      <div class="modal-body">
                        <div class="bar-nav">
                          <div class="bar-top">
                            <h2>Services</h2>
                            <ul>
                              <li>
                                <a href="index.html"
                                  >Shared Hosting<i
                                    class="fa fa-angle-right"
                                  ></i
                                ></a>
                              </li>
                              <li>
                                <a href="index.html"
                                  >Reseller Hosting<i
                                    class="fa fa-angle-right"
                                  ></i
                                ></a>
                              </li>
                              <li>
                                <a href="index.html"
                                  >VPS Hosting<i class="fa fa-angle-right"></i
                                ></a>
                              </li>
                              <li>
                                <a href="index.html"
                                  >Dedicated Hosting<i
                                    class="fa fa-angle-right"
                                  ></i
                                ></a>
                              </li>
                              <li>
                                <a href="index.html"
                                  >Domain<i class="fa fa-angle-right"></i
                                ></a>
                              </li>
                              <li>
                                <a href="index.html"
                                  >Register Domain<i
                                    class="fa fa-angle-right"
                                  ></i
                                ></a>
                              </li>
                              <li>
                                <a href="index.html"
                                  >Transfer Domain<i
                                    class="fa fa-angle-right"
                                  ></i
                                ></a>
                              </li>
                              <li>
                                <a href="index.html"
                                  >Client Area<i class="fa fa-angle-right"></i
                                ></a>
                              </li>
                              <li>
                                <a href="index.html"
                                  >Legal<i class="fa fa-angle-right"></i
                                ></a>
                              </li>
                              <li>
                                <a href="index.html"
                                  >Blog<i class="fa fa-angle-right"></i
                                ></a>
                              </li>
                              <li>
                                <a href="index.html"
                                  >About<i class="fa fa-angle-right"></i
                                ></a>
                              </li>
                              <li>
                                <a href="index.html"
                                  >FaQ<i class="fa fa-angle-right"></i
                                ></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="bar-contact">
                          <span>Contact</span>
                          <span>+44 7700 900077</span>
                          <span>support@hostcox.com</span>
                        </div>

                        <div class="bar-icon">
                          <div class="serach_option widget_single">
                            <form>
                              <input
                                type="text"
                                name="Name"
                                class="input-c"
                                placeholder="Name"
                              />
                              <button type="submit">
                                <i class="fa fa-paper-plane-o"></i>
                              </button>
                            </form>
                          </div>
                          <ul class="social_iocns">
                            <li>
                              <a href="#"><i class="fa fa-facebook"></i></a>
                            </li>
                            <li>
                              <a href="#"><i class="fa fa-twitter"></i></a>
                            </li>
                            <li>
                              <a href="#"><i class="fa fa-instagram"></i></a>
                            </li>
                            <li>
                              <a href="#"><i class="fa fa-linkedin"></i></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <!-- modal-content -->
                  </div>
                  <!-- modal-dialog -->
                </div>
                <!-- modal -->
              </div>
              <!-- sidebar -->
            </nav>
            <!-- END NAVBAR -->
          </div>
        </div>
      </div>
      <!--banner area-->
    </header>
  `,
})
export class HeaderBarBrandComponent {}
