
// 1) ������ ��� ���� � ���� ������ ������ 4.2

// db.getCollection('students').find({ avgScore : 4.2 })
 
// 2) ������ ��� ���� � 1 �����

// db.getCollection('students').find({ class : 1.0 })

// 3) ������ ��� ���� �� �������� ������

// db.getCollection('students').find({ lessons : "physics" })

// 4) ������ ��� ����, ������ ���� �������� � ����� ( scientist )

// db.getCollection('students').find({
//    "parents.profession" : "scientist" 
//     })
// 
// 5) ������ ����, � ���� ������� ������ ����� �� 4

// db.getCollection('students').find({
//     avgScore:{
//             $gt: 4
//     }
// })
// 

// 6) ������ ���������� ����

// db.getCollection('students').find({}).sort({"avgScore":-1}).limit(1)

// 7) ������ ��������� ����

// db.getCollection('students').find({}).sort({"avgScore":1}).limit(1)

// 8) ������ ��� 3 ����

// db.getCollection('students').find({}).sort({"avgScore":-1}).limit(3)

// 9) ������ ������� ��� �� ����
// 
// db.students.aggregate([
//     {$group:{'_id':' ',avgSchool: {$avg:'$avgScore'}}}
// ])

// 10) ������ ������� ��� ���� �� �������� ���������� ��� ������

// db.students.aggregate([
//     {$match: {$or: [{lessons:"physics"},{lessons:"mathematics"}]}},
//     {$group:{'_id':' ',avgSchool: {$avg:'$avgScore'}}}
// ])

// 11) ������ ������� ��� �� 2 ����

// db.students.aggregate([
//     {$match: {"class":2}},
//     {$group:{'_id':' ',avgClass_2: {$avg:'$avgScore'}}}
// ])

// 12) ������ ���� � �������� ���

// db.students.find({"parents.1":{$exists:0}})
// 
// db.students.find({ $or: [
//     {
//        parents:{$size:1}
//        },
//     {
//        parents:{$exists:false}
//        }
//        ]
//        })

// 13) ������ ������ �� �� ��������

// db.students.find({"parents".:0}})

// 14) �� ��������� ������ ���������� �����������
// 
// db.students.updateMany(
// {$and:{'parents.profession':null}},
// {$set:{'parents.$.profession':'Waiter'}}
// )
// 
// 15) ������� ����, �� ����� ������� ��� ����� �� 2.5

// db.students.remove({"avgScore":{$lt:2.5}})         

// 16) ĳ���, ������ ���� �������� � ���� ( teacher ) ��������� 5

// db.students.updateMany(
// {'parents.profession':"teacher"},
// {$set:{"avgScore":5}})

// 17) ������ ���� �� ������� � ��������� ���� (�� 5 �����) � �������� ������ ( physics )
// 
// db.students.find(
// {$and:[{class:{$lt:5}},
// {lessons:"physics"}
// ]})

// 18) ������ ����������� ����

// db.students.aggregate([
// {$group: {'_id':'$class','bestClass':{$avg:'$avgScore'}}},
// {$sort: {bestClass:-1}},
// {$limit:1}
// ])