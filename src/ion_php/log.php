<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include "connect.php";
include"../admin/functions.php";
$data = json_decode(file_get_contents("php://input"));
$examNo=$data->examNo;
$regNo= $data->regNo;
$result;
$query = mysqli_query($conn,"select * from student where student_id='$regNo'")  or die(mysqli_error($conn));
                $count = mysqli_num_rows($query);
                $row = mysqli_fetch_array($query);
                if ($count>0) {//found student
                
				 $uid=$row['id'];
				 $cyear=date('Y');
				 $csem=checksem();
				 $firstname= $row['firstname'];
				 $lastname= $row['lastname'];
				 $stud_current_year= $row['stud_current_year'];
				 $stud_current_sem=$row['current_sem'];
				$stud_program= $row['cys'];
				  if(($csem)==1){ 
				  $exam_sem_num =2; $exam_num_year = $cyear-1;
				  }
				  else{
				      $exam_sem_num =1; 
				      $exam_num_year = $cyear;
				  }
				  if($exam_sem_num==1)$semester="Jan-June"; else $semester ="July-Dec";
				$exam_no_qry = mysqli_query($conn,"select * from student_fees where id='$uid' and exam_no='$examNo' and sem='$exam_sem_num' 
				and year='$exam_num_year'") or die(mysqli_error($conn));
				      if(mysqli_num_rows($exam_no_qry)<=0)//open student page
				      {
				    $feedback= "Wrong exam number, Please use".$exam_num_year." ".$semester." exam number";
					  $result= array(
					     
					      'status'=>$feedback);
					      echo json_encode($result);
				      }
				      else
				      {//authentication ok
				          echo json_encode(array("fname"=> $firstname,"lname"=>$lastname,"current_year"=>$stud_current_year,"current_sem"=>$stud_current_sem,
				          "stud_prog"=>$stud_program,"exam_num_year"=>$exam_num_year,"exam_sem"=>$semester));
				            $query3 = mysqli_query($conn,"select * from publish_results") or die(mysqli_error($conn));
			                    $preqry3=mysqli_fetch_array($query3);
                                if(($preqry3['year']== $exam_num_year) && ($preqry3['sem']== $exam_sem_num)) 
                                  {//open publish
        $query = mysqli_query($conn,"select * from results where year='$exam_num_year'  and sem='$exam_sem_num' and uid ='$uid'") or die(mysqli_error($conn));
	 $total= mysqli_num_rows($query);
		 if($total>0){// open if results found
			 $results = mysqli_query($conn,"select * from results where year='$exam_num_year'  and sem='$exam_sem_num' and uid ='$uid'") or die(mysqli_error($conn));
			   echo '[';
			   for($i=0;i<mysqli_num_rows($results); $i++)
			   {
			   echo($i>0?',':'').json_encode(mysqli_fetch_object($results));
			   }
			   echo ']';
                                  //close published
                                  }
                                  else
                                  {
                                      $feed="Sorry currently there are no results for you in".$exam_num_year." ".$semester;
                                   $result= array(
					               'not_published'=>$feed);
					               echo json_encode($result);   
                                  }
				      }//end published results 
				      else
				      {
				           $feed="Sorry currently results for ".$exam_num_year." ".$semester."are not yet published";
				      }//results not published
				      }//end auth ok
				      }// end student found
				      else
				      { //student not found
				      $trace="Student does not exist". $regNo .$examNo;
				       $result= array(
					      'status'=> $trace);
					      echo json_encode($result);
				      }

					      
					  const [showTost, setShowTost] = useState(false);
					  const [feedBack, setFeedBack] = useState();
					  const [results, setResults] = useState([]);
					  const[studYear,setStudYear]= useState();
					  const[studSem,setStudSem]= useState();
					  const[studProg,setStudProg]= useState();
					  const[studFname,setStudFname]= useState();
					  const[studLname,setStudLname]= useState();
					  const[examSem, setExamSem] =useState();
					  //console.log(response.data.test);
    //setResults(response.data);
      //setStudFname(response.data.fname);
      //setStudLname(response.data.lname);
     // setStudYear(response.data.current_year);
      //setStudSem(response.data.current_sem);
      //setStudProg(response.data.stud_prog);
      //setExamSem(response.data.exam_sem);
      //setFeedBack(response.data.status);     
?>