<template>
    <div class="card-p">
      <div class="face front">
        <slot name="front"/>
      </div>
      <div class="face back">
        <slot name="back"/>
      </div>
    </div>
</template>

<script>
    import Card from "./card";
    export default {
        name: "card-flip",
      components: {Card}
    }
</script>

<style lang="scss" scoped>
  .card-p
  {
    position: relative;
    border-radius: 28px;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }
  .card-p .face
  {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s ease-in-out;
    transform: perspective(500px) rotateY(0deg);
    backface-visibility: hidden;
    transform-style: preserve-3d
  }
  .card-p .face.front
  {
    box-shadow: 0px 0px 28px rgba(198, 198, 198, 0.25);
    background-color: #ffffff
  }
  .card-p:hover .face.front
  {
    transform: perspective(500px) rotateY(180deg)
  }
  .card-p .face.back
  {
    box-shadow: 0px 0px 28px rgba(198, 198, 198, 0.25);
    background-color: #ffffff;
    color: #000000;
    transform: perspective(500px) rotateY(180deg)
  }
  .card-p:hover .face.back
  {
    transform: perspective(500px) rotateY(360deg)
  }
  .card-p .face h2
  {
    font-size: 2.5em;
    text-transform: uppercase;
      transform: perspective(500px) translateZ(50px)
  }

</style>
