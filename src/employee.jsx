let sally = 'Sally Smith'
let mark = 'Mark Martin'
let holly = 'Holly Unlikely'
let amol = 'Amol Shookup'
let robin = 'Robin Banks'
let sneha = 'Sneha P'

const element = (
 <ul style={{'color':'blue', 'fontSize': '24px'}}>
<li>{sally}</li>
 <li>{mark}</li>
 <li>{holly}</li>
 <li>{amol}</li>
 <li>{robin}</li>
 <li>{sneha}</li>
 
</ul>
)
ReactDOM.render(element, document.getElementById('content'))