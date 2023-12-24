class mail {
    contributor(){
        this.from = "Kampung Durian Runtuh";
        this.by = "Isnin bin Kamis";
        this.contacs = [];
    }
    message(to, msg, from) {
        console.log("Dear", to, msg, "from", from);
        

    }
}

const mai1 = new mail();
const mai2 = new mail();
mai1.message("Maman,", "Bayar hutang dong!!!", "Babang Tamvan")
mai2.message("Maman,", "Bayar hutang dong!!!", "Babang Tamvan")