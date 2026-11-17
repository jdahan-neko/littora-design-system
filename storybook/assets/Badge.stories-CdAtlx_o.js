import{j as c}from"./jsx-runtime-B0nI6RLz.js";import"./iframe-B4ODN_Tz.js";import{B as i,s as W,d as O}from"./catalogue-C9HUdH1f.js";import"./preload-helper-C1FmrZbK.js";const d=O("Badge"),I={title:"Littora/Badge",component:i,tags:["autodocs"],parameters:d.parameters,argTypes:d.argTypes,args:{tone:"neutral",children:"Expertise en cours"}},e={args:{tone:"danger",children:"Fraude suspectée"}},r={args:{tone:"warning",children:"En attente de pièces"}},s={args:{tone:"success",children:"Réglé"}},a={args:{tone:"info",children:"En instruction"}},n={args:{tone:"neutral",children:"Expertise en cours"}},t={name:"Tous les statuts",parameters:{controls:{disable:!0}},render:()=>c.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--space-3)"},children:[Object.values(W).map(o=>c.jsx(i,{tone:o.tone,children:o.libelle},o.libelle)),c.jsx(i,{tone:"neutral",children:"Expertise en cours"})]})},N=["Danger","Warning","Success","Info","Neutral","TousLesStatuts"];var l,p,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    tone: 'danger',
    children: 'Fraude suspectée'
  }
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,m,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    tone: 'warning',
    children: 'En attente de pièces'
  }
}`,...(x=(m=r.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var E,h,f;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    tone: 'success',
    children: 'Réglé'
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var S,B,b;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    tone: 'info',
    children: 'En instruction'
  }
}`,...(b=(B=a.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var j,v,y;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    tone: 'neutral',
    children: 'Expertise en cours'
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var T,w,L;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Tous les statuts',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'var(--space-3)'
  }}>
      {Object.values(statuts).map(s => <Badge key={s.libelle} tone={s.tone}>{s.libelle}</Badge>)}
      <Badge tone="neutral">Expertise en cours</Badge>
    </div>
}`,...(L=(w=t.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};export{e as Danger,a as Info,n as Neutral,s as Success,t as TousLesStatuts,r as Warning,N as __namedExportsOrder,I as default};
