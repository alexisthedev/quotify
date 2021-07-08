const getQuote = array => { // Returns a random quote in the form of QUOTE. -FIRST_NAME LAST_NAME
    let index = Math.floor(Math.random() * array.length);
    return `${array[index]} -${getRandomName()}`;
};

const getRandomName = () => { // Returns a random combination of a first and last name
    let index1 = Math.floor(Math.random() * firstNames.length);
    let index2 = Math.floor(Math.random() * lastNames.length);
    return `${firstNames[index1]} ${lastNames[index2]}`;
};

const quotesList = ['Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.','The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.','Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.','Always do your best. What you plant now, you will harvest later.','In order to succeed, we must first believe that we can.','You have to learn the rules of the game. And then you have to play better than anyone else.','A creative man is motivated by the desire to achieve, not by the desire to beat others.','Keep your eyes on the stars, and your feet on the ground.','Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.','Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.','Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.','Beginning today, treat everyone you meet as if they were going to be dead by midnight. Extend to them all the care, kindness and understanding you can muster, and do it with no thought of any reward. Your life will never be the same again.','Pursue one great decisive aim with force and determination.','We may encounter many defeats but we must not be defeated.','Do something wonderful, people may imitate it.','Perfection is not attainable, but if we chase perfection we can catch excellence.',"I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",'It is during our darkest moments that we must focus to see the light.',"Believe you can and you're halfway there.",'My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.','Whoever is happy will make others happy too.'];

const firstNames = ['JAMES','JOHN','ROBERT','MICHAEL','WILLIAM','DAVID','RICHARD','CHARLES','JOSEPH','THOMAS','CHRISTOPHER','DANIEL','PAUL','MARK','DONALD','GEORGE','KENNETH','STEVEN','EDWARD','BRIAN','RONALD','ANTHONY','KEVIN','JASON','MATTHEW','GARY','TIMOTHY','JOSE','LARRY','JEFFREY','FRANK','SCOTT','ERIC','STEPHEN','ANDREW','RAYMOND','GREGORY','JOSHUA','JERRY','DENNIS','WALTER','PATRICK','PETER','HAROLD','DOUGLAS','HENRY','CARL','ARTHUR','RYAN','ROGER','JOE','JUAN','JACK','ALBERT','JONATHAN','JUSTIN','TERRY','GERALD','KEITH','SAMUEL','WILLIE','RALPH','LAWRENCE','NICHOLAS','ROY','BENJAMIN','BRUCE','BRANDON','ADAM','HARRY','FRED','WAYNE','BILLY','STEVE','LOUIS','JEREMY','AARON','RANDY','HOWARD','EUGENE','CARLOS','RUSSELL','BOBBY','VICTOR','MARTIN','ERNEST','PHILLIP','TODD','JESSE','CRAIG','ALAN','SHAWN','CLARENCE','SEAN','PHILIP','CHRIS','JOHNNY','EARL','JIMMY','ANTONIO'];

const lastNames = ['SMITH','JOHNSON','WILLIAMS','BROWN','JONES','MILLER','DAVIS','GARCIA','RODRIGUEZ','WILSON','MARTINEZ','ANDERSON','TAYLOR','THOMAS','HERNANDEZ','MOORE','MARTIN','JACKSON','THOMPSON','WHITE','LOPEZ','LEE','GONZALEZ','HARRIS','CLARK','LEWIS','ROBINSON','WALKER','PEREZ','HALL','YOUNG','ALLEN','SANCHEZ','WRIGHT','KING','SCOTT','GREEN','BAKER','ADAMS','NELSON','HILL','RAMIREZ','CAMPBELL','MITCHELL','ROBERTS','CARTER','PHILLIPS','EVANS','TURNER','TORRES','PARKER','COLLINS','EDWARDS','STEWART','FLORES','MORRIS','NGUYEN','MURPHY','RIVERA','COOK','ROGERS','MORGAN','PETERSON','COOPER','REED','BAILEY','BELL','GOMEZ','KELLY','HOWARD','WARD','COX','DIAZ','RICHARDSON','WOOD','WATSON','BROOKS','BENNETT','GRAY','JAMES','REYES','CRUZ','HUGHES','PRICE','MYERS','LONG','FOSTER','SANDERS','ROSS','MORALES','POWELL','SULLIVAN','RUSSELL','ORTIZ','JENKINS','GUTIERREZ','PERRY','BUTLER','BARNES','FISHER'];

getQuote(quotesList);