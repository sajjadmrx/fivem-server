const FivemApi = require('../index')

const myIp = process.env.IP || 'http://11.111.1111.11:30120'




const main = async () => {
    const fivemApi = new FivemApi(myIp)

    //fivemApi.getAllInfo()

    // fivemApi.getResources()

    // fivemApi.getBanner_connecting()


    // fivemApi.getBanner_detail()


    // fivemApi.getIcon()


    // fivemApi.getName()



    //--- players methods


    // fivemApi.getPlayers()


    fivemApi.getPlayersCount()
        .then(console.log)
        .catch(console.error)

}

main()