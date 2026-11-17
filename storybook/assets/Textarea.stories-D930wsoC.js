import{j as e}from"./jsx-runtime-B0nI6RLz.js";import"./iframe-B4ODN_Tz.js";import{h as t,F as m,d as x}from"./catalogue-C9HUdH1f.js";import"./preload-helper-C1FmrZbK.js";const n=x("Textarea"),F={title:"Littora/Textarea",component:t,tags:["autodocs"],parameters:n.parameters,argTypes:{...n.argTypes,placeholder:{control:"text"},disabled:{control:"boolean"}},decorators:[r=>e.jsx("div",{style:{width:420},children:e.jsx(r,{})})],args:{placeholder:"Fuite sous l'évier, dégâts sur le parquet."},render:r=>e.jsx(m,{label:"Commentaire pour l'expert",hint:"Visible par l'assuré.",children:o=>e.jsx(t,{...o,...r})})},a={name:"Dans un Field"},s={name:"En erreur",render:r=>e.jsx(m,{label:"Motif du refus",required:!0,error:"Le motif est obligatoire pour notifier l'assuré.",children:o=>e.jsx(t,{...o,...r})}),args:{placeholder:""}},b=["DansUnField","EnErreur"];var i,l,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Dans un Field'
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,p,c;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'En erreur',
  render: args => <Field label="Motif du refus" required error="Le motif est obligatoire pour notifier l'assuré.">{p => <Textarea {...p} {...args} />}</Field>,
  args: {
    placeholder: ''
  }
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};export{a as DansUnField,s as EnErreur,b as __namedExportsOrder,F as default};
