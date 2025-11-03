<script>
  import { img } from "$lib/img";
</script>

<div>
  <div class="row">
    <div>
      <h1>Hello!!</h1>

      <p>I'm Lyssa Li :D</p>
      <p>
        I'm a current Master's student at University of Southern California
        studying Computer Science Game Development. Here's a picture of me in a
        fish hat at USC Marshall.
      </p>
      <p>Can't have a happy life without a bit of whimsy.</p>
    </div>
    <div id="me">
      <img src={img.irlFmish} alt="me at USC Marshall" />
    </div>
  </div>
	<br/>
  <p>
    I like to do doodle and read and play games. Currently getting through Jenny
    Odell's <em>How to Do Nothing</em>. A very good recommend to people who feel
    like they're a little lost.
  </p>
  <p>
    Oh also! I go by a lot of aliases. Most of them revolve around "maozblan" or
    the even more shortened version "mzbl". It comes from the chinese
    "猫之波澜", meaning something along the lines of "cat of the billowing
    waves". A younger me thought that was a silly concept and the current me
    would very much agree.
  </p>
</div>

<style>
  #me {
    margin-left: 3rem;
		border: 2px solid var(--ac);
		transform-origin: center;
		transform: rotate(-7deg);

    img {
      width: 300px;
			z-index: -100;
			transform-origin: center;
			transform: rotate(10deg) translate(10px, -5px);
    }
  }
</style>
