function cmp(a, b) {
  return b.value - a.value
}

class Table extends Component {
  constructor(props) {
    super(props)
  }

  update() {
    this.forceUpdate()
  }

  render() {
    let copy = this.props.heap.slice()
    const res = []
    while (copy.length > 0) {
      let v = Heap.pop(copy, cmp)
      res.push(<Row key={v.id} id={v.id} value={v.value} name={v.name}/>)
    }

    return <div className="rows">{ res }</div>
  }
}

class App extends Component {
	constructor(props){
		super(props)
    this.startStream = this.startStream.bind(this)
    this.stopStream = this.stopStream.bind(this)
    this.tableRef = React.createRef();
    this.heap = []
    this.rows = []
  }

	componentDidMount() {
		for(let i = 0; i < NUM_ROWS; i++){
			this.rows.push({
				id: i,
				value: i, 
				name: `id ${i}, value ${i}`
      })
      this.heap.push(this.rows[i])
    }
    Heap.heapify(this.heap, cmp)
    this.update()
  }

  update() {
    this.tableRef.current.update()
  }
  
  startStream() {
    this.ws = new WebSocket('ws://localhost:7770')
    this.ws.onopen = () => {
      this.ws.send('init')
    }

    this.updater = setInterval(this.update.bind(this), 16) // 60 FPS

    this.ws.onmessage = ({ data }) => {
      let message = null;
      try {
        message = JSON.parse(data);
      } catch(e) {
        console.log('malformed message', e);
      }
      if (message) {
        this.rows[message.id]['value'] = message.value
        this.rows[message.id]['name'] = message.name
        Heap.updateItem(this.heap, this.rows[message.id], cmp)
      }
    }
  }

  stopStream(){
    if(this.ws){
      this.ws.close()
    }
    clearInterval(this.updater)
  }

	render() {
		return (
			<div className="container">
				<h1>React RealTime</h1>
				<div className="buttons">
					<button onClick={this.startStream}>Start Streaming</button>
					<button onClick={this.stopStream}>Stop Streaming</button>
				</div>
        <Table heap={this.heap} ref={this.tableRef}/>
			</div>
		)
	}
}