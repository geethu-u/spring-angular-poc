# springboot

1. Install Maven .<br>
  Download maven from download site. https://maven.apache.org/download.cgi<br>
  Download the package  - apache-maven-3.3.9-bin.zip<br>
  Add \apache-maven-3.3.9\bin to PATH<br><br>
2. Install solr <br>
 a. Download solr 6.1.0 from http://archive.apache.org/dist/lucene/solr/6.1.0/ - [solr-6.1.0.zip]<br>
b.  Go to solr-6.1.0/bin directory and execute<br>
    > solr start
    solr will be running now.<br>
    browse to http://localhost:8983/solr<br>
    if you see the solr UI, everything is fine.<br> 

  c. Create a collection/core:<br>
      in command prompt, go to solr-6.1.0/bin directory<br>
      bin> solr create -c clelogs2<br>
  
  
  d. Upload the csv file (test data for CLE project) and index that in solr<br>
  
  e.Copy the Logs_csv.csv file into ...\solr-6.1.0\example\exampledocs directory.<br>
    > cd ...\solr-6.1.0\example\exampledocs<br>
    > java -Dtype=text/csv -Dc=clelogs2 -jar post.jar Logs_csv.csv<br>
    The content should be uploaded into solr<br>
  
  
  f. Just execute this in browser<br>
    http://localhost:8983/solr/clelogs2/select?q=*:*&wt=json&indent=true<br>
  
      if you get a json response with valid CLE records, you have indexed the data correctly. Now Solr is running and read for respond to your search request.<br>


2. Setting up the project<br>
Download the project https://github.com/geethu-u/spring-angular-poc<br>
  a .Run 'mvn package' in command line in the project folder[A folder called target will be created]<br>
  b .java -jar  target/*.jar<br>
  c . Open browser and load localhost:8080
  
3. Using the app<br>
  Currently the landing screen is defaulted to Search. Search icon in header will also take you to search<br>
  Clicking on Trends in the left hand menu will take you to the Trends screen<br>



