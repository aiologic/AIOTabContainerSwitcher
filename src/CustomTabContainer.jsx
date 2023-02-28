import { Big } from "big.js";
import { useEffect, useState } from "react";

const CustomTabContainer = ({ targetTabCtrl, currentUserId, currentEntityId, entityName }) => {
    const [lastPath, setLastPath] = useState(window.location.pathname);
    const checkTargetDivPresent = () => {
        const divList = document.getElementsByClassName("mx-name-" + targetTabCtrl);
        if (divList.length === 0) {
            throw new Error("Tab container DOM element not found. Please check provided target tab container name.");
        }
    };

    useEffect(() => {
        setLastPath(window.location.pathname);
    }, [])

    useEffect(() => {
        if (currentUserId?.items?.[0]?.id && currentEntityId?.items?.[0]?.id) {
            checkTargetDivPresent();
            if (document.querySelectorAll(".mx-name-" + targetTabCtrl + " > ul > li").length === 0) {
                console.error("Unable find tab pages");
                return;
            }
            const isViewOrEditPage = lastPath.includes("/view") || lastPath.includes("/edit");
            const liIndix =
                parseInt(window.localStorage.getItem(`${currentUserId?.items?.[0]?.id}-${entityName}-${currentEntityId?.items?.[0]?.id}`, "1"), 10) - 1;
            document.querySelectorAll(".mx-name-" + targetTabCtrl + " > ul").forEach((ultValue, _ulIndex, _listObj) => {
                ultValue.querySelectorAll("li").forEach((currentValue, _currentIndex) => {
                    currentValue.addEventListener("click", () => {
                        window.localStorage.setItem(
                            `${currentUserId?.items?.[0]?.id}-${entityName}-${currentEntityId?.items?.[0]?.id}`,
                            Big(_currentIndex + 1)
                        );
                    });
                });
                if(isViewOrEditPage) {
                    const liList = ultValue.querySelectorAll("li");
                    const li = liList.item(liIndix);
                    if (li != null) {
                        li.click();
                        li.classList.add("active");
                    }
                } else {
                     const liList = ultValue.querySelectorAll("li");
                      const li = liList.item(0);
                    if (li != null) {
                        li.click();
                        li.classList.add("active");
                    }
                }
            });
        }
    }, [targetTabCtrl, currentUserId?.items?.[0]?.id, entityName, currentEntityId?.items?.[0]?.id]);

    if (targetTabCtrl === undefined || targetTabCtrl.trim() === "") {
        console.error("Target tab container name not specified. Please specify the target tab container name.");
    }
    return "";
};

export default CustomTabContainer;
