<script>
  import Waza from "./Waza.svelte";
  export let data;
</script>

# waza (_techniques_)

The video animations have been derived from the [_KODOKAN JUDO: 100 Techniques_][100-techniques] series by [Kodokan Judo Institute] and the [IJF Academy] for educational purpose.
Techniques are organized by modern Kodokan-IJF or traditional Gokyo classification schemes.
There are 110 animations, including the 100 techniques and 10 escapes.

[100-techniques]: https://www.youtube.com/watch?v=_GxcFx8LZRk&list=PLtz539PTepc16H2iu5F3Q3D7_He1EYlIQ
[Kodokan Judo Institute]: http://kodokanjudoinstitute.org/en/
[IJF Academy]: https://academy.ijf.org/

<Waza {data} />
