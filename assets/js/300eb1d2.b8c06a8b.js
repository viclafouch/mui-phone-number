"use strict";(self.webpackChunkmui_tel_input=self.webpackChunkmui_tel_input||[]).push([[986],{1192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"react-hook-form","title":"React Hook Form","description":"Here an example if you want to plug MuiTelInput to your form using React Hook Form.","source":"@site/docs/react-hook-form.md","sourceDirName":".","slug":"/react-hook-form","permalink":"/mui-tel-input/docs/react-hook-form","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Playground","permalink":"/mui-tel-input/docs/playground"}}');var r=n(4848),i=n(8453);const a={},l="React Hook Form",s={},u=[];function c(e){const t={a:"a",code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"react-hook-form",children:"React Hook Form"})}),"\n",(0,r.jsxs)(t.p,{children:["Here an example if you want to plug ",(0,r.jsx)(t.code,{children:"MuiTelInput"})," to your form using ",(0,r.jsx)(t.a,{href:"https://react-hook-form.com/",children:"React Hook Form"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import React from "react";\nimport ReactDOM from "react-dom";\nimport Button from "@mui/material/Button";\nimport { MuiTelInput, matchIsValidTel } from "mui-tel-input";\nimport { Controller, useForm } from "react-hook-form";\n\nconst App = () => {\n  const { control, handleSubmit } = useForm({\n    defaultValues: {\n      tel: ""\n    }\n  });\n\n  const onSubmit = (data) => {\n    alert(JSON.stringify(data));\n  };\n\n  return (\n    <form onSubmit={handleSubmit(onSubmit)}>\n      <Controller\n        name="tel"\n        control={control}\n        rules={{ validate: (value) => matchIsValidTel(value, { onlyCountries: [\'FR\'] }) }}\n        render={({ field: { ref: fieldRef, value, ...fieldProps }, fieldState }) => (\n          <MuiTelInput\n            {...fieldProps}\n            value={value ?? \'\'}\n            inputRef={fieldRef}\n            onlyCountries={["FR"]}\n            helperText={fieldState.invalid ? "Tel is invalid" : ""}\n            error={fieldState.invalid}\n          />\n        )}\n      />\n     <div>\n        <Button type="submit" variant="contained" sx={{ mt: 2 }}>\n          Submit\n        </Button>\n      </div>\n    </form>\n  )\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://codesandbox.io/s/react-hook-form-with-mui-tel-input-o530m7?fontsize=14&hidenavigation=1&theme=dark",children:(0,r.jsx)(t.img,{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit on CodeSandbox"})})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var o=n(6540);const r={},i=o.createContext(r);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);