function main (){

    // var studentReviews = [
    //     {
    //         image:'images/tst-image1.jpg',
    //         name: 'Jackson',
    //         title: 'Shopify Developer',
    //         paragpaph: 'You do really help young creative minds to get quality education and professional job search assistance.I would recommend it to everyone!'
    //     },

    //     {
    //         image:'images/tst-image2.jpg',
    //         name: 'Andrio',
    //         title: 'Web Developer',
    //         paragpaph: 'No pasa nada'
    //     },
        
    //     {
    //         image:'images/tst-image3.jpg',
    //         name: 'Camila',
    //         title: 'Marketing Manager',
    //         paragpaph: 'Try something new and exciting'
    //     },

    //     {
    //         image:'images/tst-image4.jpg',
    //         name: 'John',
    //         title: 'Teaching assistant',
    //         paragpaph: 'Loves to teach others'
    //     }
    // ]

    let request = new Request('http://pushadmin.dropmind.com/api/reviews', {method:'GET'});
    fetch(request)
    .then(function(response){
        if(response.ok){
            return response.json();
        }else {
            throw 'Response nije u redu'
        }
    })
    .then(function(studentReviews){
        // console.log(studentReviews);
        courseLogic(studentReviews);
    })
    .catch(function(greska){
        console.log('Greska');
    })

    function courseLogic (studentReviews) {

        
        let anchorDiv = document.querySelector('.dots-class');
        let avatarImage = document.querySelector('.avatar-image');
        // console.log(avatarImage);
        let avatarName = document.querySelector('.name-of-student');
        // console.log(avatarName);
        let avatarTitle = document.querySelector('.avatar-title');
        // console.log(avatarTitle);
        let studentParagraph = document.querySelector('.avatar-paragraf');
        // console.log(studentParagraph);
        let dotsImage = document.querySelector('.dots-image');
        // console.log(dotsImage);
        let dotsDiv = document.querySelector('.dots-div');
        // console.log(dotsDiv);
        let studentStarsDiv = document.querySelector('.student-stars');
        //  console.log(studentStarsDiv);
        
        
        
        studentReviews.forEach(function (element,index) {
            // console.log(studentReviews);
            // console.log(studentReviews[0]);
            
            let anchorElement = document.createElement('a');
            // console.log(anchorDiv);
            // console.log(anchorElement);
            anchorElement.setAttribute('class','dot');
            anchorElement.setAttribute('href','javascript:;');
            anchorElement.innerHTML = '<i class="fas fa-dot-circle"></i>';
            
            anchorDiv.appendChild(anchorElement);
            
            anchorElement.addEventListener('click', function(event){
                // console.log(event);
                changeStudentReview(index);
                
            })
            
            anchorElement.addEventListener('mouseover',function(event){
                // console.log(event);
                dotsDiv.classList.add('dots-image-on');
                dotsDiv.style.display = "";
                let anchorPosition = anchorElement.getBoundingClientRect();
                // console.log(anchorPosition);
                // let positionX = anchorPosition.left - ((window.innerWidth - 990) / 2 );
                let positionX = anchorPosition.left - 250 ;
                let positionY = anchorPosition.top - 380 ;
                // console.log(positionX,positionY);
                dotsDiv.style.left = positionX +'px';
                dotsDiv.style.top = positionY +'px';
                
                changeDotImage(index);
            })
            
            anchorElement.addEventListener('mouseout', function(event){
                dotsDiv.classList.remove('dots-image-on');
                 dotsDiv.style.display = "none";
            })
        });

        //pravimo zvezdice za prvi objekat kada se podaci ucitaju
        let studentStars = studentReviews[0].grade;
        console.log(studentStars);
        
        for(var i=0; i < studentStars; i++){  
           let star = document.createElement('i');
                 star.setAttribute('class', 'fas fa-star');
                //  star.setAttribute('ID', 'star');
                 console.log(star);
                 studentStarsDiv.appendChild(star);       
            
       }

        
        let changeStudentReview = function (index){
            // console.log(index)
            avatarImage.src = studentReviews[index].student.imageurl;
            avatarName.textContent = studentReviews[index].student.name;
            avatarTitle.textContent = studentReviews[index].student.position;
            studentParagraph.textContent = studentReviews[index].reviewtext;

            //uzimam iz objekta student review podatak za property grade i smestam u promenljivu
            let studentStars = studentReviews[index].grade;
            // console.log(studentStars);
           
            //podaci iz parent elementa se brisu
            studentStarsDiv.textContent ='';  

            //prikazati broj zvezdica koje ima svaki student 
            for(var i=0; i < studentStars; i++){    
              let star = document.createElement('i');
              star.setAttribute('class', 'fas fa-star');
              console.log(star);
              studentStarsDiv.appendChild(star);                
           }
           
              

            
        };
        
        let changeDotImage = function (index){
            dotsImage.src = studentReviews[index].student.imageurl;
            
        }
        
        
        
        
        
        
        
        
        
    }
        
    }
    
main();