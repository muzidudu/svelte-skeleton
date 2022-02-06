<script>
    import LazyImage from "svelte-lazy-image"
    import { lazyload } from './../lazyload'
    export let item;
</script>
<article class="v-img-box group">
    <div class="img-box">
      <a href="/video/{item.id}">
      
       <img
      data-src="{item.thumb.replace('hjimg.','hjimg1.')}" 
      src="https://via.placeholder.com/250?text=placeholder" 
      use:lazyload 
      alt="Lorem Ipsum"
       />
      <div class="playbtn">
          <span>
            <svg class="w-6 h-6 text-black fill-current" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 506.026667v11.946666a32.426667 32.426667 0 0 1-15.786667 27.733334L370.346667 768c-23.04 13.653333-34.986667 13.653333-45.226667 7.68l-10.666667-5.973333a32.426667 32.426667 0 0 1-15.786666-26.88V281.173333a32.426667 32.426667 0 0 1 15.786666-27.733333l10.666667-5.973333c10.24-5.973333 22.186667-5.973333 52.053333 11.52l375.04 219.306666a32.426667 32.426667 0 0 1 15.786667 27.733334z" p-id="1185" /></svg>
          </span>
        </div>
    </a>
    </div>
    <div class="img-info">
      <div class="h2">
        <a href="/video/{item.id}">
          {item.name}
        </a>
      </div>
      <div class="meta">
        <span class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>{ item.views } Views
        </span>
        <span class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>{ item.created_at }小时前
        </span>
      </div>
    </div>
  </article>