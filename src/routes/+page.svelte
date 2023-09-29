<script>
  import Sveltetube from '$lib/Sveltetube.svelte'
  import Countup from '$lib/Countup.svelte'
</script>

<section class="hero full">
  <div class="inner flex swap">
    <div>
      <Sveltetube
        shadow="0 1rem 2rem rgba(0,0,0,0.5)"
      />
    </div>
    <div class="flow right">
      <div class="h1">A NEW SOS HUMAN TRAFFICKING HAND SIGNAL HAS BEEN DEVELOPED</div>
      <a href="/trafficking" class="button">Learn More</a>
    </div>
  </div>
</section>

<section>
  <div class="inner flow">
    
    <h2>Section Heading</h2>
    
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores qui quasi dolorum
      harum facilis odio, consectetur deserunt aliquid laudantium enim, nulla
      necessitatibus repudiandae, et neque eius reprehenderit sequi vel similique quaerat
      placeat. Iusto rerum odit incidunt, blanditiis sed molestiae praesentium? Qui
      aspernatur sunt culpa ad eos excepturi illo doloremque sapiente.
    </p>
    
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores qui quasi dolorum
      harum facilis odio, consectetur deserunt aliquid laudantium enim, nulla
      necessitatibus repudiandae, et neque eius reprehenderit sequi vel similique quaerat
      placeat. Iusto rerum odit incidunt, blanditiis sed molestiae praesentium? Qui
      aspernatur sunt culpa ad eos excepturi illo doloremque sapiente.
    </p>
    
    <Countup />
  </div>

</section>

<section class="watch-for-signal full">
  <div class="inner flex">
    <div />
    <div>
      <div class="flow overlay">
        <p class="h1">U.S. NATIONAL HUMAN TRAFFICKING HOTLINE</p>
        <a class="button" href="tel:18883737888">1-888-373-7888</a>
        <p class="h2">
          OR TEXT "BE FREE" TO
        </p>
        <a class="button" style="color: var(--light);" href="sms:233733">233733</a>
      </div>
    </div>
  </div>
</section>

<section class="empower">
  <div class="inner flow">
    <img class="center" src="/signal.webp" alt="signal" />
    <h2 class="h1 center balance">
      Together, we empower the children of the world with the universal sign "NEED HELP,
      GET HELP"
    </h2>
  </div>
</section>

<section class="human-trafficking full">
  <div class="inner flow flex">
    <div class="flow overlay">
      <div class="h1">What is<br /><span>Human<br />Trafficking?</span></div>
      <a href="/trafficking" class="button">Learn More</a>
    </div>
    <div />
  </div>
</section>

<section class="solution">
  <div class="inner flow">
    <img class="center" src="/signal.webp" alt="signal" />
    <h2 class="h1 center balance">
      YOU ARE PART OF THE SOLUTION TO HELP us connect millions to this secret weapon.
    </h2>
  </div>
</section>

<section class="indicators full">
  <div class="inner flow flex">
    <div />
    <div class="flow overlay">
      <div class="h1">INDICATORS OF HUMAN TRAFFICKING</div>
      <a href="/trafficking" class="button">Learn More</a>
    </div>
  </div>
</section>

<section>
  <div class="inner flow">
    <h2>Section Heading</h2>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores qui quasi dolorum
      harum facilis odio, consectetur deserunt aliquid laudantium enim, nulla
      necessitatibus repudiandae, et neque eius reprehenderit sequi vel similique quaerat
      placeat. Iusto rerum odit incidunt, blanditiis sed molestiae praesentium? Qui
      aspernatur sunt culpa ad eos excepturi illo doloremque sapiente.
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores qui quasi dolorum
      harum facilis odio, consectetur deserunt aliquid laudantium enim, nulla
      necessitatibus repudiandae, et neque eius reprehenderit sequi vel similique quaerat
      placeat. Iusto rerum odit incidunt, blanditiis sed molestiae praesentium? Qui
      aspernatur sunt culpa ad eos excepturi illo doloremque sapiente.
    </p>
  </div>
</section>

<style>
  .full {
    padding-block: 6rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    text-transform: uppercase;
    color: var(--light);
  }

  .full .h2 {
    color: var(--light);
  }

  .hero {
    background-image: url('/woman-distress.webp');
  }

  .watch-for-signal {
    background-image: url('/watch-for-the-signal.webp');
  }

  .human-trafficking {
    background-image: url('/what-is-human-trafficking.webp');
  }

  .human-trafficking span {
    font-weight: 800;
  }

  .indicators {
    padding-block: 8rem;
    background-image: url('/indicators.webp');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    text-transform: uppercase;
  }

  .overlay {
    padding: var(--double-size);
    box-shadow: 0 0 100px 1000px rgba(0, 0, 0, 0.4) inset;
  }

  .empower img,
  .solution img {
    max-width: 8rem;
  }
</style>
