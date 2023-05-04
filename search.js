let inputWord;
    let siteChkArr = document.querySelectorAll(".checkSite");
    siteChkArr = Array.from(siteChkArr);

    function changeIframeUrl() {
      inputWord = document.getElementById('word').value;  
      document.getElementById("frame1").src = `https://search.daum.net/search?nil_suggest=btn&w=tot&DA=SBC&q=${inputWord}`;
    }

    function changeIframeUrl2() {
      inputWord = document.getElementById('word').value;  
      let query = `select * where {
        ?s rdfs:label '${inputWord}'@ko .
        ?s rdf:type foaf:Person . 
        optional { ?s dbo:birthDate ?birthDate }
        optional { ?s dbo:birthPlace ?birthPlace }
        optional { ?s dbo:citizenship ?citizenship }
        optional { ?s dbo:almaMater ?almaMater }
      }`
      document.getElementById("frame2").src = `https://dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=${query}&format=text%2Fhtml&timeout=30000&signal_void=on&signal_unconnected=on`;
    }

    // function changeIframeUrl3() {
    //   inputWord = document.getElementById('word').value;
    //   document.getElementById('frame3').src = `https://www.bing.com/search?q=${inputWord}&form=QBLH&sp=-1&lq=0&pq=${inputWord}&sc=10-3&qs=n&sk=&cvid=BB3A4200C313497F819D7702D6F3F35C&ghsh=0&ghacc=0&ghpl=`;
    // }
    
    // function changeIframeUrl4() {
    //   inputWord = document.getElementById('word').value;
    //   document.getElementById('frame4').src = `https://search.yahoo.com/search?p=${inputWord}fr=yfp-t&fr2=p%3Afp%2Cm%3Asb&ei=UTF-8&fp=1`;
    // }

    function getCheckboxValue() {

      siteChkArr.map(item => {
        if(item.checked === true){
          if (item.value === 'daum') {
            changeIframeUrl();
          } else if (item.value === 'dbpedia') {
            changeIframeUrl2();
          } else if (item.value === 'bing') {
            // changeIframeUrl3();
            // console.log('bing없어요');
          } 
          else {
            
          }
        } else {
          
        }
      });
    }

    // 4개 까지만    
    const siteCheck = 'input[name="site"]:checked';
    let siteCheckBox = document.querySelectorAll(".checkSite");
    siteCheckBox = Array.from(siteCheckBox);

    const handleInputCheck = (current) => {
      let chkCount = 0;
      siteCheckBox.map((item) => {
        item.checked && chkCount++;
      });

      if (chkCount > 4) {
        alert("4개까지만 체크 가능");
        current.target.checked = false;
      }
    };

    siteCheckBox.map((item) => {
      item.addEventListener("click", handleInputCheck);
    });

    // let count = 0;

    // const handleInputCheck = (e) => {
    //   let count = 0;

    //   if(count >= 3){
    //     alert('3개까지');
    //     e.target.checked = false;
    //     count = 0;
    //     console.log('dddd')
    //   }
    // }
    
    // siteCheckBox.map(item => {
    //   item.addEventListener('click', handleInputCheck)
    //   console.log('ssssss')
    // });  