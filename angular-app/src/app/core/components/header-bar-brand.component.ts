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
                ><img src="images/logo.png" alt=""
              /></a>
              <div
                class="collapse navbar-collapse main-menu"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav nav ml-auto">
                  <li class="nav-item p-nav">
                    <a href="index.html" class="nav-link active nav-menu"
                      >Home<i class="fa fa-angle-down"></i
                    ></a>
                    <ul class="nav_mega">
                      <li>
                        <div class="mega_menu_container">
                          <div class="row pb-30">
                            <div class="col-md-6 col-lg-4">
                              <div class="mega_menu_box">
                                <a href="index.html">
                                  <img
                                    src="images/demo/home-1.jpg"
                                    alt="thumbnail"
                                    class="img-fluid"
                                  />
                                </a>
                                <h4 class="mega_menu_heading">
                                  <a href="index.html" class="">Home 01</a>
                                </h4>
                              </div>
                            </div>

                            <div class="col-md-6 col-lg-4">
                              <div class="mega_menu_box">
                                <a href="index-02.html">
                                  <img
                                    src="images/demo/home-2.jpg"
                                    alt="thumbnail"
                                    class="img-fluid"
                                  />
                                </a>
                                <h4 class="mega_menu_heading">
                                  <a href="index-02.html" class="active"
                                    >Home 02</a
                                  >
                                </h4>
                              </div>
                            </div>

                            <div class="col-md-6 col-lg-4">
                              <div class="mega_menu_box">
                                <a href="index-03.html">
                                  <img
                                    src="images/demo/home-3.jpg"
                                    alt="thumbnail"
                                    class="img-fluid"
                                  />
                                </a>
                                <h4 class="mega_menu_heading">
                                  <a href="index-03.html" class="">Home 03</a>
                                </h4>
                              </div>
                            </div>
                          </div>

                          <div class="row  pb-30">
                            <div class="col-md-6 col-lg-4">
                              <div class="mega_menu_box">
                                <a href="index-04.html">
                                  <img
                                    src="images/demo/home-4.jpg"
                                    alt="thumbnail"
                                    class="img-fluid"
                                  />
                                </a>
                                <h4 class="mega_menu_heading">
                                  <a href="index-04.html" class="">Home 4</a>
                                </h4>
                              </div>
                            </div>

                            <div class="col-md-6 col-lg-4">
                              <div class="mega_menu_box">
                                <a href="index-05-cloud.html">
                                  <img
                                    src="images/demo/home-5.jpg"
                                    alt="thumbnail"
                                    class="img-fluid"
                                  />
                                </a>
                                <h4 class="mega_menu_heading">
                                  <a href="index-05-cloud.html" class=""
                                    >Home Cloud</a
                                  >
                                </h4>
                              </div>
                            </div>

                            <div class="col-md-6 col-lg-4">
                              <div class="mega_menu_box">
                                <a href="index-06-shape.html">
                                  <img
                                    src="images/demo/home-6.jpg"
                                    alt="thumbnail"
                                    class="img-fluid"
                                  />
                                </a>
                                <h4 class="mega_menu_heading">
                                  <a href="index-06-shape.html" class="active"
                                    >Home Shape</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-6 col-lg-4">
                              <div class="mega_menu_box">
                                <a href="index-07-vps.html">
                                  <img
                                    src="images/demo/home-7.jpg"
                                    alt="thumbnail"
                                    class="img-fluid"
                                  />
                                </a>
                                <h4 class="mega_menu_heading">
                                  <a href="index-07-vps.html" class=""
                                    >Home VPS</a
                                  >
                                </h4>
                              </div>
                            </div>
                            <div class="col-md-6 col-lg-4">
                              <div class="mega_menu_box">
                                <a href="index-08-angle.html">
                                  <img
                                    src="images/demo/home-8.jpg"
                                    alt="thumbnail"
                                    class="img-fluid"
                                  />
                                </a>
                                <h4 class="mega_menu_heading">
                                  <a href="index-08-angle.html" class=""
                                    >Home Angle</a
                                  >
                                </h4>
                              </div>
                            </div>

                            <div class="col-md-6 col-lg-4">
                              <div class="mega_menu_box">
                                <a href="index-09-wp.html">
                                  <img
                                    src="images/demo/home-9.jpg"
                                    alt="thumbnail"
                                    class="img-fluid"
                                  />
                                </a>
                                <h4 class="mega_menu_heading">
                                  <a href="index-09-wp.html" class=""
                                    >Home Wordpress</a
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item single_nav">
                    <a href="domain-page.html" class="nav-link nav-menu"
                      >Domain</a
                    >
                  </li>
                  <li class="nav-item single_nav">
                    <a href="index.html" class="nav-link dropdown_icon nav-menu"
                      >Hosting<i class="fa fa-angle-down"></i
                    ></a>
                    <ul class="navbar-nav nav mx-auto">
                      <li class="nav-item">
                        <a href="index.html" class="nav-link">Shared Hosting</a>
                      </li>
                      <li class="nav-item">
                        <a href="index-07-vps.html" class="nav-link"
                          >VPS Hosting</a
                        >
                      </li>
                      <li class="nav-item">
                        <a href="index-05-cloud.html" class="nav-link"
                          >Cloud Hosting</a
                        >
                      </li>
                      <li class="nav-item">
                        <a href="index-09-wp.html" class="nav-link"
                          >WordPress Hosting</a
                        >
                      </li>
                      <li class="nav-item">
                        <a href="index-02.html" class="nav-link"
                          >Reseller Hosting</a
                        >
                      </li>
                      <li class="nav-item">
                        <a href="index-07-vps.html" class="nav-link"
                          >Dedicated Server</a
                        >
                      </li>
                      <li class="nav-item">
                        <a
                          href="https://billing.sylhost.com/cart.php"
                          target="_blank"
                          class="nav-link"
                          >WHMCS</a
                        >
                      </li>
                      <li class="nav-item">
                        <a href="domain-page.html" class="nav-link"
                          >Domain Name</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item single_nav">
                    <a
                      href="https://billing.sylhost.com/cart.php"
                      target="_blank"
                      class="nav-link nav-menu"
                      >WHMCS</a
                    >
                  </li>
                  <li class="nav-item single_nav">
                    <a href="#" class="nav-link nav-menu"
                      >Pages<i class="fa fa-angle-down"></i
                    ></a>
                    <ul class="navbar-nav nav mx-auto">
                      <li class="nav-item">
                        <a href="#" class="nav-link dropdown_icon d-right"
                          >Home Pages<i class="fa fa-angle-right"></i
                        ></a>
                        <ul class="navbar-nav nav mx-auto d-two d-width">
                          <li class="nav-item">
                            <a href="index.html" class="nav-link">Home 01</a>
                          </li>
                          <li class="nav-item">
                            <a href="index-02.html" class="nav-link">Home 02</a>
                          </li>
                          <li class="nav-item">
                            <a href="index-03.html" class="nav-link">Home 03</a>
                          </li>
                          <li class="nav-item">
                            <a href="index-05-cloud.html" class="nav-link"
                              >Home Cloud</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="index-08-angle.html" class="nav-link"
                              >Home Angle</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="index-06-shape.html" class="nav-link"
                              >Home Shape</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="index-07-vps.html" class="nav-link"
                              >Home VPS</a
                            >
                          </li>
                          <li class="nav-item">
                            <a href="index-09-wp.html" class="nav-link"
                              >Home WordPress</a
                            >
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link dropdown_icon d-right"
                          >Blog Page<i class="fa fa-angle-right"></i
                        ></a>
                        <ul class="navbar-nav nav mx-auto d-two d-width">
                          <li class="nav-item">
                            <a href="blog.html" class="nav-link">Blog</a>
                          </li>
                          <li class="nav-item">
                            <a href="blog-details.html" class="nav-link"
                              >Blog Details</a
                            >
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a href="privecy.html" class="nav-link">Privacy</a>
                      </li>
                      <li class="nav-item">
                        <a href="domain-page.html" class="nav-link"
                          >Domain Serch</a
                        >
                      </li>
                      <li class="nav-item">
                        <a href="about.html" class="nav-link">About Us</a>
                      </li>
                      <li class="nav-item">
                        <a href="services.html" class="nav-link">Services</a>
                      </li>
                      <li class="nav-item">
                        <a href="team-page.html" class="nav-link">Team</a>
                      </li>
                      <li class="nav-item">
                        <a href="contact.html" class="nav-link">Contact</a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item single_nav">
                    <a href="#" class="nav-link nav-menu"
                      >Blog<i class="fa fa-angle-down"></i
                    ></a>
                    <ul class="navbar-nav nav mx-auto">
                      <li class="nav-item">
                        <a href="blog.html" class="nav-link">Blog</a>
                      </li>
                      <li class="nav-item">
                        <a href="blog-details.html" class="nav-link"
                          >Blog Details</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item p-nav">
                    <a href="contact.html" class="nav-link nav-menu">Contact</a>
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
