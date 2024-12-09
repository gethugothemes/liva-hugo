{{ define "main" }}

<!-- featured post -->
<section class="section-sm">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-10 featured-post-slider">
        <!-- slider item -->
        {{ range ( where .Site.RegularPages "Type" "featured" )}}
        <article class="card featured-post">
          <div class="row no-gutters align-items-center">
            <div class="col-md-5">
              {{ if .Params.Image }}
              <img src="{{ .Params.Image | absURL }}" class="card-img" alt="{{ .Title | markdownify }}">
              {{ end }}
            </div>
            <div class="col-md-6 offset-md-1">
              <div class="card-body">
                <div class="mb-3 post-meta">
                  <span>By {{ .Site.Params.Author }}</span>
                  {{ if not .Params.HideDate }}
                  <span class="border-bottom border-primary px-2 mx-1"></span>
                  <span>{{ .PublishDate.Format "02 January 2006" }}</span>
                  {{ end }}
                </div>
                <a href="{{ .Permalink }}"
                  class="h1 font-weight-bold d-block text-dark mb-4 card-title">{{ .Title | markdownify }}</a>
                <p class="card-text">{{.Summary}}...</p>
              </div>
            </div>
          </div>
        </article>
        {{ end }}
      </div>
    </div>
  </div>
</section>
<!-- /featured post -->

<!-- recent post -->
<section>
  <div class="container">
    <div class="row">
      {{ range first 3 (where .Site.RegularPages "Type" "post")}}
      <div class="col-lg-4 small-post-border">
        <article class="media">
          {{ if .Params.Image }}
          <div class="recent-post-thumb mr-3" style="background-image: url('{{ .Params.Image | absURL }}');"></div>
          {{ end }}
          <div class="media-body">
            <div class="mb-3 post-meta">
              <span>By {{ .Site.Params.Author }}</span>
              {{ if not .Params.HideDate }}
              <span class="border-bottom border-primary px-2 mx-1"></span>
              <span>{{ .PublishDate.Format "02 Jan 2006" }}</span>
              {{ end }}
            </div>
            <a href="{{ .Permalink }}" class="h5 d-block mb-3">{{ .Title | markdownify }}</a>
            <a href="{{ .Permalink }}" class="btn btn-outline-primary">read more</a>
          </div>
        </article>
      </div>
      {{ end }}
    </div>
  </div>
</section>
<!-- /recent post -->

<!-- blog post -->
<section class="section pb-0">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 mb-5 mb-lg-0">
        <div class="row">
          {{ $paginator := .Paginate (where .Site.RegularPages "Type" "post") }}
          {{ range $paginator.Pages }}
          <div class="col-md-6 mb-4">
            <article class="card">
              {{ if .Params.Image }}
              <img src="{{ .Params.Image | absURL }}" class="card-img-top" alt="{{ .Title | markdownify }}">
              {{ end }}
              <div class="card-body px-0">
                {{ range .Params.Categories }}
                <a href="{{ `categories/` | relLangURL }}{{ . | urlize | lower }}"
                  class="text-primary">{{ . | title | humanize }}</a>
                {{ end }}
                <a href="{{ .Permalink }}" class="h5 d-block my-3">{{ .Title | markdownify }}</a>
                <div class="mb-3 post-meta">
                  <span>By {{ .Site.Params.Author }}</span>
                  {{ if not .Params.HideDate }}
                  <span class="border-bottom border-primary px-2 mx-1"></span>
                  <span>{{ .PublishDate.Format "02 January 2006" }}</span>
                  {{ end }}
                </div>
                <p class="card-text">{{ .Summary }}</p>
                <a href="{{ .Permalink }}" class="btn btn-outline-primary">read more</a>
              </div>
            </article>
          </div>
          {{ end }}
        </div>
      </div>
      <!-- sidebar -->
      {{ partial "sidebar.html" . }}
      <!-- /sidebar -->

      <!-- pagination -->
      <div class="col-12 mt-5">
        {{ template "_internal/pagination.html" . }}
      </div>
    </div>
  </div>
</section>
<!-- /blog post -->

{{ end }}