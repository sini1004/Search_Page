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

    function changeIframeUrl3() {
      inputWord = document.getElementById('word').value;
      document.getElementById('frame3').src = `https://www.bing.com/search?q=${inputWord}&form=QBLH&sp=-1&lq=0&pq=${inputWord}&sc=10-3&qs=n&sk=&cvid=BB3A4200C313497F819D7702D6F3F35C&ghsh=0&ghacc=0&ghpl=`;
    console.log(inputWord)
    }
    
    function changeIframeUrl4() {
      
      document.getElementById('tableBody').textContent = "";
      inputWord = document.getElementById('word').value;
      var requestURL = `https://viaf.org/viaf/search?query=cql.any%20all%20"${inputWord}"&sortKeys=holdingscount&httpAccept=application/json&recordSchema=info:srw/schema/1/JSON`;
      var request = new XMLHttpRequest();
      request.open('GET', requestURL);
      request.responseType = 'json';
      request.send();
      request.onload = function() {
          var viafData = request.response;
          var viafDataResponse = [];
          var viafDataRecords = [];
          viafDataResponse = viafData.searchRetrieveResponse.records;
          for(let i = 0; i < viafDataResponse.length; i++) {
              var temp = [];
              var temp2;
              if(viafDataResponse[i].record.recordData.mainHeadings.data.length > 0) {
                  for(let j = 0; j < viafDataResponse[i].record.recordData.mainHeadings.data.length; j++) {
                      temp2 = viafDataResponse[i].record.recordData.mainHeadings.data[j].text;
                      temp.push(temp2);
                  }
              } else {
                  temp2 = viafDataResponse[i].record.recordData.mainHeadings.data.text;
                  temp.push(temp2);
              }
              // console.log(temp2);
              viafDataRecords.push(temp);
              // console.log(viafDataRecords[i]);
          }
          
          for(let i = 0; i < viafDataRecords.length; i++) {
              var myArticle = document.getElementById('tableBody');
              var tableRow = document.createElement('tr');
              var myNumber = document.createElement('td');
              var myData = document.createElement('td');
              myNumber.textContent = [i + 1];
              var temp = myArticle.appendChild(tableRow);
              temp.appendChild(myNumber);
              
              for(let j = 0; j < viafDataRecords[i].length; j++) {
                  var myPara = document.createElement('p');
                  myPara.textContent = viafDataRecords[i][j];
                  // console.log(myPara);
                  myData.appendChild(myPara);
              }
              temp.appendChild(myData);
          }
      }
    }

    function getCheckboxValue() {

      siteChkArr.map(item => {
        if(item.checked === true){
          if (item.value === 'daum') {
            changeIframeUrl();
          } else if (item.value === 'dbpedia') {
            changeIframeUrl2();
          } else if (item.value === 'bing') {
            changeIframeUrl3();
          } else if (item.value === 'viaf') {
            changeIframeUrl4();
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