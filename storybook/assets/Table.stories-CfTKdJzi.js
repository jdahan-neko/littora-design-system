import{j as d}from"./jsx-runtime-B0nI6RLz.js";import"./iframe-B4ODN_Tz.js";import{c as u,T as p,d as b,B as f,s as r}from"./catalogue-C9HUdH1f.js";import"./preload-helper-C1FmrZbK.js";const t=b("Table",{layout:"padded"}),y=[{key:"id",label:"Dossier"},{key:"assure",label:"Assuré"},{key:"type",label:"Sinistre"},{key:"statut",label:"Statut",render:n=>d.jsx(f,{tone:r[n.statut].tone,children:r[n.statut].libelle})},{key:"estimation",label:"Estimation",numeric:!0}],C={title:"Littora/Table",component:p,tags:["autodocs"],parameters:t.parameters,argTypes:{...t.argTypes,onRowClick:{...t.argTypes.onRowClick,action:"ligne cliquée"}},args:{columns:y,rows:u}},e={name:"Liste de dossiers"},a={args:{columns:[{key:"date",label:"Date"},{key:"beneficiaire",label:"Bénéficiaire"},{key:"motif",label:"Motif"},{key:"montant",label:"Montant",numeric:!0}],rows:[{id:"p1",date:"18/10/2026",beneficiaire:"Claire Morvan",motif:"Acompte dégât des eaux",montant:"1 500 €"},{id:"p2",date:"24/10/2026",beneficiaire:"Plombier agréé (réseau Littora)",motif:"Facture de recherche de fuite",montant:"320 €"},{id:"p3",date:"04/11/2026",beneficiaire:"Claire Morvan",motif:"Solde après expertise",montant:"2 880 €"}]}},L=["ListeDeDossiers","Paiements"];var i,s,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Liste de dossiers'
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var l,c,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: 'date',
      label: 'Date'
    }, {
      key: 'beneficiaire',
      label: 'Bénéficiaire'
    }, {
      key: 'motif',
      label: 'Motif'
    }, {
      key: 'montant',
      label: 'Montant',
      numeric: true
    }],
    rows: [{
      id: 'p1',
      date: '18/10/2026',
      beneficiaire: 'Claire Morvan',
      motif: 'Acompte dégât des eaux',
      montant: '1 500 €'
    }, {
      id: 'p2',
      date: '24/10/2026',
      beneficiaire: 'Plombier agréé (réseau Littora)',
      motif: 'Facture de recherche de fuite',
      montant: '320 €'
    }, {
      id: 'p3',
      date: '04/11/2026',
      beneficiaire: 'Claire Morvan',
      motif: 'Solde après expertise',
      montant: '2 880 €'
    }]
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};export{e as ListeDeDossiers,a as Paiements,L as __namedExportsOrder,C as default};
