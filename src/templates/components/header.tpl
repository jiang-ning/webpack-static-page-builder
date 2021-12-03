<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container nav-home">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-bs-toggle="collapse" data-bs-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/<%= __('lang') %>/index.html"></a>
    </div>
    <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav navbar-right">
        <li class="about-us"><a href="/<%= __('lang') %>/about-us/"><%= __('nav-about-us') %></a></li>
        <li class="product-service"><a href="/<%= __('lang') %>/product-service.html"><%= __('nav-product-service') %></a></li>
        <li>
            <ul class="lang-menu">
                <li><a href="javascript:void(0)"><%= __('nav-lang-zh') %></a> <span>|</span></li>
                <li><a href="javascript:void(0)"><%= __('nav-lang-en') %></a></li>
            </ul>
        </li>
      </ul>
    </div><!--/.nav-collapse -->
  </div>
  <div class="bg-home-gray"></div>
</nav>
