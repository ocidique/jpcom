<template>
  <div class="row">
    <div
      class="bg"
      id="gradient__background"
    />

    <div class="landing">
      <div class="landing-circle" />
      <div class="landing-square">
        <div class="landing-square__left">
          <p class="welcome font-mono">welcome to my website</p>
        </div>
        <div class="landing-square__right">
          <p class="description font-mono">creative developer / designer & artist / nordics</p>
          <p class="slogan font-mono">only development is permanent</p>
        </div>
      </div>
      <div class="landing-triangle" />
      <h1 class="landing-title font-medium text-white text-shadow-xl">juho pekkala</h1>
    </div>

    <g-link
      class="font-mono uppercase z-50  rounded-full px-4 py-2 hover:bg-neutral-900 hover:text-white"
      to="/about/"
    >
      Enter the site
    </g-link>
  </div>

</template>

<script>
export default {
  metaInfo: {
    title: "Juho Pekkala, creative developer / designer & artist / nordics",
  },

  mounted() {
    this.createBackgroundGradient();
  },
  methods: {
    createBackgroundGradient() {
      const colors = new Array(
        [56, 67, 139],
        [148, 75, 148],
        [215, 90, 136],
        [255, 126, 113],
        [255, 178, 95],
        [255, 235, 104]
      );

      let step = 0;

      // Color table indices for:
      // - current color left
      // - next color left
      // - current color right
      // - next color right
      const colorIndices = [0, 1, 2, 3];

      // Transition speed
      const gradientSpeed = 0.002;

      function updateGradient() {
        console.log("gradient updated!");

        const gradientBackground = document.getElementById(
          "gradient__background"
        );

        if (gradientBackground) {
          let c0_0 = colors[colorIndices[0]];
          let c0_1 = colors[colorIndices[1]];
          let c1_0 = colors[colorIndices[2]];
          let c1_1 = colors[colorIndices[3]];

          let istep = 1 - step;
          let opacity = 0.7;

          let r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
          let g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
          let b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
          let color1 =
            "rgba(" + r1 + ", " + g1 + ", " + b1 + ", " + opacity + ")";

          let r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
          let g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
          let b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
          let color2 =
            "rgba(" + r2 + ", " + g2 + ", " + b2 + ", " + opacity + ")";

          const gradientBackgroundStyle = gradientBackground.style;

          gradientBackgroundStyle.background =
            "-webkit-gradient(linear, left top, right top, from(" +
            color1 +
            "), to(" +
            color2 +
            "))";

          gradientBackgroundStyle.background =
            "-moz-linear-gradient(left, " +
            color1 +
            " 0%, " +
            color2 +
            " 100%)";

          step += gradientSpeed;

          if (step >= 1) {
            step %= 1;
            colorIndices[0] = colorIndices[1];
            colorIndices[2] = colorIndices[3];

            // Pick two new target color indices
            // Don't pick the same as the current one
            colorIndices[1] =
              (colorIndices[1] +
                Math.floor(1 + Math.random() * (colors.length - 1))) %
              colors.length;
            colorIndices[3] =
              (colorIndices[3] +
                Math.floor(1 + Math.random() * (colors.length - 1))) %
              colors.length;
          }
        } else {
          clearInterval(gradientInterval);
        }
      }

      const gradientInterval = setInterval(updateGradient, 10);
    },
  },
};
</script>

<style>
.row {
  display: flex;
  flex-direction: column;
  align-items: center;
  /*   justify-content: center; */
  background: rgba(0, 0, 0, 0.1);
  height: 100vh;
}

.bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-height: 100vh;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    right top,
    from(#38438b),
    color-stop(#944b94),
    color-stop(#d75a88),
    color-stop(#ff7e71),
    color-stop(#ffb25f),
    to(#ffeb68)
  );
  background-image: -webkit-linear-gradient(
    left bottom,
    #38438b,
    #944b94,
    #d75a88,
    #ff7e71,
    #ffb25f,
    #ffeb68
  );
  background-image: -o-linear-gradient(
    left bottom,
    #38438b,
    #944b94,
    #d75a88,
    #ff7e71,
    #ffb25f,
    #ffeb68
  );
  background-image: linear-gradient(
    to right top,
    #38438b,
    #944b94,
    #d75a88,
    #ff7e71,
    #ffb25f,
    #ffeb68
  );
}

#gradient {
  position: relative;
}

#gradient__background {
  width: 100%;
  min-height: 300px;
  box-sizing: border-box;
}

/* Middle stuff */
.landing {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  pointer-events: auto;
  height: 768px;
  max-width: 768px;
}

.landing-circle {
  background: #cd5c5c;
  width: 200px;
  height: 200px;
  position: relative;
  top: 100px;
  border-radius: 100px;
  z-index: 1;
}

.landing-square {
  position: relative;
  width: 600px;
  height: 300px;
  z-index: 1;
}

.landing-square__left {
  width: 300px;
  height: 300px;
  background: #9acd32;
  float: left;
}

.welcome {
  margin: 0;
  padding: 2.5em 1em;
  text-align: right;
  cursor: default;
  position: absolute;
  top: -25%;
  left: -8%;
  float: left;
  z-index: 10;
}

.landing-square__right {
  width: 300px;
  height: 300px;
  float: left;
}

.description {
  margin: 0;
  z-index: 10;
  padding: 0 1em;
  cursor: default;
  position: absolute;
  top: 55%;
  width: 100%;
}

.slogan {
  margin: 0;
  z-index: 10;
  padding: 0 1em;
  cursor: default;
  position: absolute;
  top: 90%;
  width: 100%;
}

.wuts {
  position: absolute;
  left: 0;
  bottom: 0;
  margin: 5vh;
  z-index: 3;
  color: var(--text-color-2);
  font-size: 1.2em;
}

.landing-triangle {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 100px 170px 100px;
  border-color: transparent transparent #0091ff transparent;
  position: absolute;
  z-index: 3;
}

.landing-title {
  font-family: "Poppins", sans-serif;
  letter-spacing: -0.025em;
  font-size: 5em;
  line-height: 160px;
  margin: 0;
  text-transform: lowercase;
  z-index: 10;
  cursor: default;
  position: absolute;
  left: 205px;
  top: 310px;
}

.landing-title span {
  padding-left: 40px;
}

.landing-square__left,
.landing-circle,
.landing-title {
  transition: transform 0.3s ease-out;
}
</style>
