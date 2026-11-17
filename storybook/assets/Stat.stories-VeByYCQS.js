import{j as e}from"./jsx-runtime-B0nI6RLz.js";import"./iframe-B4ODN_Tz.js";import{f as t,d as g}from"./catalogue-C9HUdH1f.js";import"./preload-helper-C1FmrZbK.js";const o=g("Stat"),j={title:"Littora/Stat",component:t,tags:["autodocs"],parameters:o.parameters,argTypes:o.argTypes,args:{value:"128",label:"Dossiers ouverts"}},s={name:"Dossiers ouverts",args:{value:"128",label:"Dossiers ouverts"}},a={name:"Délai moyen",args:{value:"9 j",label:"Délai moyen de règlement"}},r={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--space-9)"},children:[e.jsx(t,{value:"128",label:"Dossiers ouverts"}),e.jsx(t,{value:"9 j",label:"Délai moyen de règlement"}),e.jsx(t,{value:"3",label:"Fraudes suspectées"})]})},S=["DossiersOuverts","DelaiMoyen","Indicateurs"];var l,n,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Dossiers ouverts',
  args: {
    value: '128',
    label: 'Dossiers ouverts'
  }
}`,...(u=(n=s.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};var i,m,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Délai moyen',
  args: {
    value: '9 j',
    label: 'Délai moyen de règlement'
  }
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,d,v;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--space-9)'
  }}>
      <Stat value="128" label="Dossiers ouverts" />
      <Stat value="9 j" label="Délai moyen de règlement" />
      <Stat value="3" label="Fraudes suspectées" />
    </div>
}`,...(v=(d=r.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};export{a as DelaiMoyen,s as DossiersOuverts,r as Indicateurs,S as __namedExportsOrder,j as default};
