{{ if .Site.Params.newsletter.enable }}
<section class="section-sm">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 mx-auto text-center">
        <h2>{{ .Site.Params.newsletter.title | markdownify }}</h2>
        <p class="text-light px-md-5 py-4 border-left border-right border-primary">
          {{ .Site.Params.newsletter.content | markdownify }}</p>
        <form action="#" class="row justify-content-center">
          <div class="input-group col-md-8">
            <input type="text" class="form-control" placeholder="Your Email Address">
            <div class="input-group-append">
              <button class="input-group-text btn btn-primary">Subscribe</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
{{ end }}

<footer class="text-capitalize">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 text-center mb-5">
        <a href="{{ .Site.BaseURL }}"><img src="{{ .Site.Params.logo | absURL }}" alt="{{ .Site.Title }}"></a>
      </div>
      {{ if or  .Site.Params.mobile .Site.Params.location .Site.Params.email }}         
      <div class="col-lg-3 col-sm-6 mb-5">
        <h6 class="mb-4">Contact Me</h6>
        <ul class="list-unstyled">
          {{ if .Site.Params.mobile }}
          <li class="mb-3"><a class="text-dark" href="tel:{{ .Site.Params.mobile }}"><i
                class="ti-mobile mr-3 text-primary"></i>{{ .Site.Params.mobile }}</a></li>
          {{ end }}
          {{ if .Site.Params.location }}           
          <li class="mb-3"><i class="ti-location-pin mr-3 text-primary"></i>{{ .Site.Params.location }}</li>
          {{ end }}
          {{ if .Site.Params.email }}           
          <li class="mb-3"><a class="text-dark" href="mailto:{{ .Site.Params.email }}"><i
                class="ti-email mr-3 text-primary"></i>{{ .Site.Params.email }}</a>
          {{ end }}
          </li>
        </ul>
      </div>
      {{ end }}
      <div class="col-lg-3 col-sm-6 mb-5">
        <h6 class="mb-4">Social Contacts</h6>
        <ul class="list-unstyled">
          {{ range .Site.Params.social }}
          <li class="mb-3"><a class="text-dark" href="{{ .link | safeURL }}">{{ .title }}</a></li>
          {{ end }}
        </ul>
      </div>
      <div class="col-lg-3 col-sm-6 mb-5">
        <h6 class="mb-4">Categories</h6>
        {{- if isset .Site.Taxonomies "categories" }}
        {{- if not (eq (len .Site.Taxonomies.categories) 0) }}
        <ul class="list-unstyled">
          {{- range $name, $items := .Site.Taxonomies.categories }}
          <li class="mb-3"><a class="text-dark"
              href="{{ `categories/` | relLangURL }}{{ $name | urlize | lower }}/">{{ $name | title | humanize }}</a>
          </li>
          {{- end }}
        </ul>
        {{- end }}
        {{- end }}
      </div>
      <div class="col-lg-3 col-sm-6 mb-5">
        <h6 class="mb-4">Quick Links</h6>
        <ul class="list-unstyled">
          {{ range .Site.Menus.footer }}
          <li class="mb-3"><a class="text-dark" href="{{ .URL | absURL }}">{{ .Name }}</a></li>
          {{ end }}
        </ul>
      </div>
      <div class="col-12 border-top py-4 text-center">
        {{ .Site.Params.copyright | markdownify }}
      </div>
    </div>
  </div>
</footer>

<script>
  var indexURL = {{ "index.json" | absURL }}
</script>

{{ "<!-- JS Plugins -->" | safeHTML }}
{{ range .Site.Params.plugins.js}}
<script src="{{ .URL | absURL }}"></script>
{{ end }}
{{ "<!-- Main Script -->" | safeHTML }}
{{ $script := resources.Get "js/script.js" | minify}}
<script src="{{ $script.Permalink }}"></script>


<!-- cookie -->
{{ if site.Params.cookies.enable }}
<script src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.2.1/js.cookie.min.js"></script>
<div id="js-cookie-box" class="cookie-box cookie-box-hide">
	This site uses cookies. By continuing to use this website, you agree to their use. <span id="js-cookie-button" class="btn btn-sm btn-primary ml-2">I Accept</span>
</div>
<script>
	(function ($) {
		const cookieBox = document.getElementById('js-cookie-box');
		const cookieButton = document.getElementById('js-cookie-button');
		if (!Cookies.get('cookie-box')) {
			cookieBox.classList.remove('cookie-box-hide');
			cookieButton.onclick = function () {
				Cookies.set('cookie-box', true, {
					expires: {{ site.Params.cookies.expire_days }}
				});
				cookieBox.classList.add('cookie-box-hide');
			};
		}
	})(jQuery);
</script>

<!-- cookie style -->
<style>
.cookie-box {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  z-index: 9999;
  padding: 1rem 2rem;
  background: rgb(71, 71, 71);
  transition: all .75s cubic-bezier(.19, 1, .22, 1);
  color: #fdfdfd;
}

.cookie-box-hide {
  display: none;
}
</style>
{{ end }}