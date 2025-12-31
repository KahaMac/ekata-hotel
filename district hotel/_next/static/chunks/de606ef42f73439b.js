(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,75395,e=>{"use strict";var t=e.i(633),o=e.i(87431),r=e.i(7659),s=e.i(96154),i=e.i(9536),n=e.i(96435),a=e.i(45562),l=e.i(31137),d=e.i(24718);function c({hotels:e}){let t=(0,a.useMap)();return(0,o.useEffect)(()=>{if(e.length>0){let o=l.default.latLngBounds(e.map(e=>[e.coordinates.lat,e.coordinates.lng]));t.fitBounds(o,{padding:[50,50]})}},[e,t]),null}function h({hotels:e,center:o=[27.7172,85.324],zoom:a=12,height:h="600px"}){let p=e.length>0?[e[0].coordinates.lat,e[0].coordinates.lng]:o;return(0,t.jsxs)("div",{className:"bg-white border border-border rounded-lg overflow-hidden",children:[(0,t.jsx)("div",{style:{height:h,width:"100%",position:"relative"},children:(0,t.jsxs)(r.MapContainer,{center:p,zoom:a,style:{height:"100%",width:"100%",zIndex:0},scrollWheelZoom:!0,className:"rounded-lg",children:[(0,t.jsx)(s.TileLayer,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e.length>0&&(0,t.jsx)(c,{hotels:e}),e.map(e=>(0,t.jsx)(i.Marker,{position:[e.coordinates.lat,e.coordinates.lng],icon:((e="#2563eb")=>l.default.divIcon({className:"custom-marker",html:`
      <div style="
        background-color: ${e};
        width: 36px;
        height: 36px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid white;
        box-shadow: 0 3px 10px rgba(0,0,0,0.35);
        position: relative;
        transition: transform 0.2s ease;
      ">
        <div style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          color: white;
          font-size: 20px;
          font-weight: bold;
          line-height: 1;
        ">🏨</div>
      </div>
    `,iconSize:[36,36],iconAnchor:[18,36],popupAnchor:[0,-36]}))("#2563eb"),children:(0,t.jsx)(n.Popup,{children:(0,t.jsxs)("div",{className:"p-2",children:[(0,t.jsx)("h3",{className:"font-bold text-foreground text-sm mb-1",children:e.name}),(0,t.jsx)("p",{className:"text-xs text-muted-foreground mb-2",children:e.location}),(0,t.jsx)("a",{href:`/hotels/${e.id}`,className:"text-xs text-primary hover:underline",children:"View Details →"})]})})},e.id))]})}),e.length>0&&(0,t.jsxs)("div",{className:"p-6 border-t border-border bg-muted/30",children:[(0,t.jsxs)("h3",{className:"text-lg font-semibold text-foreground mb-4",children:["Hotels on Map (",e.length,")"]}),(0,t.jsx)("div",{className:"space-y-3 max-h-64 overflow-y-auto",children:e.map(e=>(0,t.jsxs)("div",{className:"flex items-start gap-3 p-3 bg-white rounded-lg hover:bg-muted/50 transition border border-border",children:[(0,t.jsx)(d.MapPin,{size:20,className:"text-primary flex-shrink-0 mt-0.5"}),(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)("p",{className:"font-semibold text-foreground text-sm",children:e.name}),(0,t.jsx)("p",{className:"text-xs text-muted-foreground",children:e.location})]})]},e.id))})]})]})}e.s(["MapView",()=>h])},85384,e=>{e.n(e.i(75395))}]);