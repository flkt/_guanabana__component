import { openBlock as r, createElementBlock as a, renderSlot as u, createTextVNode as d } from "vue";
const f = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [c, s] of e)
    o[c] = s;
  return o;
}, i = {}, p = { type: "button" };
function _(t, e) {
  return r(), a("button", p, [
    u(t.$slots, "default"),
    d(" componente prueba ")
  ]);
}
const l = /* @__PURE__ */ f(i, [["render", _]]), m = { ButtonTest: l }, n = m, w = {
  install(t) {
    Object.keys(n).forEach((e) => {
      t.component(e, n[e]);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(w);
export {
  w as default
};
