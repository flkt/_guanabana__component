import { openBlock as r, createElementBlock as s, renderSlot as _ } from "vue";
const a = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, c] of e)
    o[n] = c;
  return o;
}, f = {}, l = { type: "button" };
function u(t, e) {
  return r(), s("button", l, [
    _(t.$slots, "default")
  ]);
}
const d = /* @__PURE__ */ a(f, [["render", u]]), i = { ButtonTest: d };
export {
  i as default
};
