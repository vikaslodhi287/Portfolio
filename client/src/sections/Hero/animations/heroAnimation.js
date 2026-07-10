import gsap from "gsap";

export function heroEntranceAnimation(refs) {
  const {
    badge,
    content,
    image,
    stats,
    social,
    tech,
  } = refs;

  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
  });

  tl.from(
    badge.current,
    {
      y: -40,
      opacity: 0,
      duration: 0.7,
    }
  )

    .from(
      content.current.children,
      {
        x: -60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
      },
      "-=.3"
    )

    .from(
      image.current,
      {
        scale: .8,
        opacity: 0,
        duration: 1,
      },
      "-=.8"
    )

    .from(
      social.current,
      {
        y: 30,
        opacity: 0,
        duration: .6,
      },
      "-=.6"
    )

    .from(
      stats.current,
      {
        y: 40,
        opacity: 0,
        duration: .7,
      },
      "-=.4"
    )

    .from(
      tech.current,
      {
        y: 40,
        opacity: 0,
        duration: .7,
      },
      "-=.5"
    );
}