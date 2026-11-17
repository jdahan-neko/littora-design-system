import{j as e}from"./jsx-runtime-B0nI6RLz.js";import"./iframe-B4ODN_Tz.js";import{b as d,P as c,c as r,T as p,B as m,s as a,d as g}from"./catalogue-C9HUdH1f.js";import"./preload-helper-C1FmrZbK.js";const o=g("AppShell",{layout:"fullscreen"}),l=[{key:"dossiers",href:"#dossiers",label:"Dossiers"},{key:"pilotage",href:"#pilotage",label:"Pilotage"},{key:"parametres",href:"#parametres",label:"Paramètres"}],x={title:"Littora/AppShell",component:d,tags:["autodocs"],parameters:o.parameters,argTypes:{...o.argTypes,current:{control:"inline-radio",options:l.map(s=>s.key)},links:{control:!1},children:{control:!1}},decorators:[s=>e.jsx("div",{style:{height:520},children:e.jsx(s,{})})],args:{current:"dossiers",links:l}},t={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Dossiers",meta:`${r.length} dossiers ouverts`}),e.jsx(p,{columns:[{key:"id",label:"Dossier"},{key:"assure",label:"Assuré"},{key:"statut",label:"Statut",render:s=>e.jsx(m,{tone:a[s.statut].tone,children:a[s.statut].libelle})},{key:"estimation",label:"Estimation",numeric:!0}],rows:r})]})}},f=["Dossiers"];var n,i,u;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: <>
        <PageHead title="Dossiers" meta={\`\${dossiers.length} dossiers ouverts\`} />
        <Table columns={[{
        key: 'id',
        label: 'Dossier'
      }, {
        key: 'assure',
        label: 'Assuré'
      }, {
        key: 'statut',
        label: 'Statut',
        render: r => <Badge tone={statuts[r.statut].tone}>{statuts[r.statut].libelle}</Badge>
      }, {
        key: 'estimation',
        label: 'Estimation',
        numeric: true
      }]} rows={dossiers} />
      </>
  }
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};export{t as Dossiers,f as __namedExportsOrder,x as default};
