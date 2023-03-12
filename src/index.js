import * as components from './components';

const componentsList = components?.default;
const GuanabanaComponents = {
  install(Vue) {
    Object.keys(componentsList).forEach(name => {
      Vue.component(name, componentsList[name]);
    })
  },
};
export default GuanabanaComponents;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(GuanabanaComponents);
}
