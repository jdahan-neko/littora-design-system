import{j as e}from"./jsx-runtime-B0nI6RLz.js";import"./iframe-B4ODN_Tz.js";import{S as n,F as m,d as g}from"./catalogue-C9HUdH1f.js";import"./preload-helper-C1FmrZbK.js";const l=g("Select"),E={title:"Littora/Select",component:n,tags:["autodocs"],parameters:l.parameters,argTypes:l.argTypes,decorators:[a=>e.jsx("div",{style:{width:360},children:e.jsx(a,{})})],render:a=>e.jsx(m,{label:"Type de sinistre",children:r=>e.jsx(n,{...r,...a})}),args:{options:[{value:"eau",label:"Dégât des eaux"},{value:"vol",label:"Vol avec effraction"},{value:"bris",label:"Bris de glace"},{value:"incendie",label:"Incendie"}]}},s={name:"Dans un Field"},t={name:"Statut du dossier",render:a=>e.jsx(m,{label:"Statut du dossier",hint:"Visible par le gestionnaire uniquement.",children:r=>e.jsx(n,{...r,...a})}),args:{options:[{value:"instruction",label:"En instruction"},{value:"pieces",label:"En attente de pièces"},{value:"fraude",label:"Fraude suspectée"},{value:"regle",label:"Réglé"}]}},F=["DansUnField","StatutDuDossier"];var i,o,u;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Dans un Field'
}`,...(u=(o=s.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};var d,c,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Statut du dossier',
  render: args => <Field label="Statut du dossier" hint="Visible par le gestionnaire uniquement.">{p => <Select {...p} {...args} />}</Field>,
  args: {
    options: [{
      value: 'instruction',
      label: 'En instruction'
    }, {
      value: 'pieces',
      label: 'En attente de pièces'
    }, {
      value: 'fraude',
      label: 'Fraude suspectée'
    }, {
      value: 'regle',
      label: 'Réglé'
    }]
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};export{s as DansUnField,t as StatutDuDossier,F as __namedExportsOrder,E as default};
