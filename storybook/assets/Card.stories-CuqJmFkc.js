import{j as e}from"./jsx-runtime-B0nI6RLz.js";import"./iframe-B4ODN_Tz.js";import{C as g,e as x,d as E}from"./catalogue-C9HUdH1f.js";import"./preload-helper-C1FmrZbK.js";const a=E("Card",{layout:"padded"}),f={title:"Littora/Card",component:g,tags:["autodocs"],parameters:a.parameters,argTypes:{...a.argTypes,actions:{...a.argTypes.actions,control:!1},children:{control:!1}},args:{title:"Assuré",children:e.jsx("p",{children:"Claire Morvan, contrat Habitation Essentielle, 14 rue des Goélands, Lorient."})}},t={name:"Titre et actions",args:{title:"Assuré",actions:e.jsx(x,{variant:"ghost",size:"sm",children:"Modifier"}),children:e.jsx("p",{children:"Claire Morvan, contrat Habitation Essentielle, 14 rue des Goélands, Lorient."})}},r={name:"Titre seul",args:{title:"Sinistre",children:e.jsx("p",{children:"Dégât des eaux déclaré le 02/10/2026. Fuite sous l'évier, dégâts limités à la cuisine."})}},s={name:"Sans en-tête",args:{title:void 0,children:e.jsx("p",{children:"Franchise contractuelle : 150 €. Plafond de garantie : 30 000 €."})}},v=["TitreEtActions","TitreSeul","SansEnTete"];var n,i,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Titre et actions',
  args: {
    title: 'Assuré',
    actions: <Button variant="ghost" size="sm">Modifier</Button>,
    children: <p>Claire Morvan, contrat Habitation Essentielle, 14 rue des Goélands, Lorient.</p>
  }
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var l,c,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Titre seul',
  args: {
    title: 'Sinistre',
    children: <p>Dégât des eaux déclaré le 02/10/2026. Fuite sous l'évier, dégâts limités à la cuisine.</p>
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,p,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Sans en-tête',
  args: {
    title: undefined,
    children: <p>Franchise contractuelle : 150 €. Plafond de garantie : 30 000 €.</p>
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};export{s as SansEnTete,t as TitreEtActions,r as TitreSeul,v as __namedExportsOrder,f as default};
