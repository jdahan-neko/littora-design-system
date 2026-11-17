import{j as e}from"./jsx-runtime-B0nI6RLz.js";import"./iframe-B4ODN_Tz.js";import{F as o,I as h,d as b}from"./catalogue-C9HUdH1f.js";import"./preload-helper-C1FmrZbK.js";const s=b("Field"),L={title:"Littora/Field",component:o,tags:["autodocs"],parameters:s.parameters,argTypes:{...s.argTypes,children:{...s.argTypes.children,control:!1}},decorators:[t=>e.jsx("div",{style:{width:360},children:e.jsx(t,{})})],args:{label:"Référence du contrat"},render:t=>e.jsx(o,{...t,children:x=>e.jsx(h,{...x})})},r={name:"Libellé et aide",args:{label:"Référence du contrat",hint:"Elle figure sur l'avis d'échéance."}},a={args:{label:"Montant proposé (€)",hint:"Après déduction de la franchise.",required:!0}},n={name:"En erreur",args:{label:"Montant proposé (€)",hint:"Après déduction de la franchise.",required:!0,error:"Indiquez un montant."}},F=["LibelleEtAide","Obligatoire","EnErreur"];var i,d,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Libellé et aide',
  args: {
    label: 'Référence du contrat',
    hint: "Elle figure sur l'avis d'échéance."
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,u,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Montant proposé (€)',
    hint: 'Après déduction de la franchise.',
    required: true
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,E,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'En erreur',
  args: {
    label: 'Montant proposé (€)',
    hint: 'Après déduction de la franchise.',
    required: true,
    error: 'Indiquez un montant.'
  }
}`,...(g=(E=n.parameters)==null?void 0:E.docs)==null?void 0:g.source}}};export{n as EnErreur,r as LibelleEtAide,a as Obligatoire,F as __namedExportsOrder,L as default};
