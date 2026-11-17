import{j as e}from"./jsx-runtime-B0nI6RLz.js";import"./iframe-B4ODN_Tz.js";import{I as n,F as d,d as y}from"./catalogue-C9HUdH1f.js";import"./preload-helper-C1FmrZbK.js";const l=y("Input"),E={title:"Littora/Input",component:n,tags:["autodocs"],parameters:l.parameters,argTypes:{...l.argTypes,type:{control:"inline-radio",options:["text","number"]},placeholder:{control:"text"},disabled:{control:"boolean"}},decorators:[r=>e.jsx("div",{style:{width:360},children:e.jsx(r,{})})],args:{type:"text",placeholder:"Lorient"},render:r=>e.jsx(d,{label:"Ville du sinistre",children:s=>e.jsx(n,{...s,...r})})},a={name:"Dans un Field",args:{type:"text",placeholder:"Lorient"}},t={render:r=>e.jsx(d,{label:"Estimation des dommages (€)",children:s=>e.jsx(n,{...s,...r})}),args:{type:"number",placeholder:"4850"}},o={name:"Désactivé",render:r=>e.jsx(d,{label:"Numéro de dossier",children:s=>e.jsx(n,{...s,...r})}),args:{type:"text",disabled:!0,placeholder:"SIN-2026-0412"}},N=["DansUnField","Nombre","Desactive"];var i,p,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Dans un Field',
  args: {
    type: 'text',
    placeholder: 'Lorient'
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,u,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Field label="Estimation des dommages (€)">{p => <Input {...p} {...args} />}</Field>,
  args: {
    type: 'number',
    placeholder: '4850'
  }
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,b,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Désactivé',
  render: args => <Field label="Numéro de dossier">{p => <Input {...p} {...args} />}</Field>,
  args: {
    type: 'text',
    disabled: true,
    placeholder: 'SIN-2026-0412'
  }
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};export{a as DansUnField,o as Desactive,t as Nombre,N as __namedExportsOrder,E as default};
