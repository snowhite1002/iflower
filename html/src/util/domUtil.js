/**
 * Created by xue.bai_2 on 2017/5/5.
 */
export default function deleteChildNodes(parent, currentNode){
    // let childNodes = currentNode.childNodes;
    //
    // for(let i = childNodes.length - 1; i >= 0; --i){
    //     currentNode.removeChild(childNodes[i]);
    // }

    parent.removeChild(currentNode);
}