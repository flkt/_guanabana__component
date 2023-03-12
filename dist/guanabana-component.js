import { openBlock as c, createElementBlock as s, renderSlot as u, createTextVNode as d } from "vue";
const r = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [_, a] of t)
    n[_] = a;
  return n;
}, i = {}, f = { type: "button" };
function p(e, t) {
  return c(), s("button", f, [
    u(e.$slots, "default"),
    d(" componente ")
  ]);
}
const l = /* @__PURE__ */ r(i, [["render", p]]), m = {}, h = {
  type: "text",
  value: "",
  placeholder: "ejeles"
};
function w(e, t) {
  return c(), s("input", h);
}
const x = /* @__PURE__ */ r(m, [["render", w]]), y = { ButtonTest: l, InputTest: x }, o = y, b = {
  install(e) {
    Object.keys(o).forEach((t) => {
      e.component(t, o[t]);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(b);
export {
  b as default
};
