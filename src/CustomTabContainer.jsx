import { Big } from "big.js";
import { useEffect } from "react";

const CustomTabContainer = ({ targetTabCtrl, currentUserId, moduleName }) => {
    const checkTargetDivPresent = () => {
        const divList = document.getElementsByClassName("mx-name-" + targetTabCtrl);
        if (divList.length === 0) {
            throw new Error("Tab container DOM element not found. Please check provided target tab container name.");
        }
    };

    useEffect(() => {
        if (currentUserId?.items?.[0]?.id) {
            checkTargetDivPresent();
            if (document.querySelectorAll(".mx-name-" + targetTabCtrl + " > ul > li").length === 0) {
                console.error("Unable find tab pages");
                return;
            }
            const liIndix =
                parseInt(window.localStorage.getItem(`${currentUserId?.items?.[0]?.id}-${moduleName}`, "1"), 10) - 1;
            document.querySelectorAll(".mx-name-" + targetTabCtrl + " > ul").forEach((ultValue, _ulIndex, _listObj) => {
                ultValue.querySelectorAll("li").forEach((currentValue, _currentIndex) => {
                    currentValue.addEventListener("click", () => {
                        window.localStorage.setItem(
                            `${currentUserId?.items?.[0]?.id}-${moduleName}`,
                            Big(_currentIndex + 1)
                        );
                    });
                });
                const liList = ultValue.querySelectorAll("li");
                const li = liList.item(liIndix);
                if (li != null) {
                    li.click();
                }
            });
        }
    }, [targetTabCtrl, currentUserId, moduleName]);

    if (targetTabCtrl === undefined || targetTabCtrl.trim() === "") {
        console.error("Target tab container name not specified. Please specify the target tab container name.");
    }
    return "";
};

export default CustomTabContainer;
