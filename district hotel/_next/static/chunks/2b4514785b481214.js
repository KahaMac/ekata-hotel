(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,37896,e=>{"use strict";var t=e.i(633),o=e.i(87431),i=e.i(7659),r=e.i(96154),s=e.i(9536),n=e.i(96435),a=e.i(45562),d=e.i(31137);function l({lat:e,lng:t}){let i=(0,a.useMap)();return(0,o.useEffect)(()=>{i.setView([e,t],15)},[e,t,i]),null}function c({latitude:e=27.7172,longitude:o=85.324,address:a="Balaju, 16, Kathmandu, Nepal",height:c="400px"}){return(0,t.jsx)("div",{className:"bg-muted border border-border rounded-lg overflow-hidden",style:{height:c,width:"100%"},children:(0,t.jsxs)(i.MapContainer,{center:[e,o],zoom:15,style:{height:"100%",width:"100%",zIndex:0},scrollWheelZoom:!0,className:"rounded-lg",children:[(0,t.jsx)(r.TileLayer,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),(0,t.jsx)(l,{lat:e,lng:o}),(0,t.jsx)(s.Marker,{position:[e,o],icon:d.default.divIcon({className:"custom-marker-office",html:`
      <div style="
        background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
        width: 44px;
        height: 44px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 4px solid white;
        box-shadow: 0 4px 14px rgba(37, 99, 235, 0.5);
        position: relative;
      ">
        <div style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          color: white;
          font-size: 22px;
          font-weight: bold;
          line-height: 1;
        ">📍</div>
      </div>
    `,iconSize:[44,44],iconAnchor:[22,44],popupAnchor:[0,-44]}),children:(0,t.jsx)(n.Popup,{children:(0,t.jsxs)("div",{className:"p-2",children:[(0,t.jsx)("h3",{className:"font-bold text-foreground text-sm mb-1",children:"District Hotel Business Association"}),(0,t.jsx)("p",{className:"text-xs text-muted-foreground mb-2",children:a}),(0,t.jsx)("p",{className:"text-xs text-muted-foreground",children:"Phone: +977 01-4981882"})]})})})]})})}e.s(["ContactMap",()=>c])},58219,e=>{e.n(e.i(37896))}]);