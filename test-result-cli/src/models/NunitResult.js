 
 "use strict";

  class TestRun{
    constructor(id,testcaseCount,result,total,passed,failed,inconclusive,
        skipped,asserts,engineVersion,clrVersion,startTime,endTime,duration,
        commandLine,filter,testSuite ) {
            this.id=id;
            this.testcaseCount=testcaseCount;
            this.result=result;
            this.total=total;
            this.passed=passed;
            this.failed=failed;
            this.inconclusive;
            this.skipped;
            this.asserts;
            this.engineVersion=engineVersion;
            this.clrVersion=clrVersion;
            this.startTime=startTime;
            this.endTime=endTime;
            this.duration=duration;
            this.commandLine=commandLine;
            this.filter=filter;
            this.testSuite=testSuite
         
    }
}

class TestSuite{
    constructor(id,type,name,fullName,runState,testcaseCount,result,site,label,
        startTime,endTime,duration,total,passed,failed,warnings,inconclusive,
        skipped,asserts,environment,settings,failure,output){

    }
}
class Environment {
    constructor(frameworkVersion,clrVersion,osVersion,platform,cwd,machineName,
        user,userDomain,culture,uiculture,osArchitecture){

    }
}
class Failure{
    constructor(message,stackTrace) {

    }
}
class Assertion{
    constructor(message,stackTrace) {

    }
}
class Testcase{
    constructor(){

    }
}
