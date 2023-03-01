import { Container } from "./styles";

export function Chart ({data, ...rest}){

    let count = 0
    let sumData = 0;
    let percentData = 0;

    data.forEach(dat => {
            sumData = sumData + Number(dat.quantity)
    })

    const chartData = data.map(dat => {
        count++
        percentData = Number(dat.quantity)/sumData
        return{...dat, keyCount: count, percent: percentData}
    })

    const gridTemplate = chartData.map(dat => String(Math.floor(dat.percent*100)) + "fr" )

    let concater = ""
    gridTemplate.forEach(grid => {
        concater = concater.concat(grid + " ")
    })

    concater = concater.slice(0, 24)


    
    return(
        <Container {...rest}>
            <div className="myChart" style={{display: "grid", gridTemplateAreas: "1 2 3 4 5 6", gridTemplateRows: "1fr", gridTemplateColumns: concater}} >
                {
                    chartData.map(dat => (
                        <div key={String(dat.keyCount)} className={"rect"+String(dat.keyCount)} style={{gridRowStart: "1", gridRowEnd: "1", gridColumnStart: String(dat.keyCount), gridColumnEnd: String(dat.keyCount)}}/>
                    ))
                }
            </div>
            <div className="legend" >
                {
                    chartData.map(dat => (
                        <div key={String(dat.keyCount)} className={"leg"+String(dat.keyCount)}> 
                            <div className={"circ"+String(dat.keyCount)} />
                            <div>
                                <p>{dat.quantity}</p>
                                <span>{dat.info}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Container>
    )
}